import { Component, ChangeDetectionStrategy, signal, computed, isDevMode } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PresentationType } from './models/presentation.model';
import { PresentationTypeLabelPipe } from './pipes/presentation-type-label.pipe';
import { PRESENTATIONS } from './constants/presentations.constants';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing.page.html',
  styleUrl: './landing.page.scss',
  imports: [RouterLink, PresentationTypeLabelPipe],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LandingPage {
  readonly PresentationType = PresentationType;
  readonly availableTypes = [
    PresentationType.PRO,
    PresentationType.LOCAL,
    PresentationType.WIP,
    PresentationType.SCHOOL
  ];

  activeFilters = signal<Set<PresentationType>>(new Set());

  presentations = computed(() => {
    let all = [...PRESENTATIONS];

    // Filter out Hello World in production
    if (!isDevMode()) {
      all = all.filter(p => p.route !== '/hello-world');
    }

    // Apply type filters (if any are active)
    const filters = this.activeFilters();
    if (filters.size > 0) {
      all = all.filter(p => p.types.some(type => filters.has(type)));
    }

    return all;
  });

  toggleFilter(type: PresentationType): void {
    this.activeFilters.update(filters => {
      const newFilters = new Set(filters);
      if (newFilters.has(type)) {
        newFilters.delete(type);
      } else {
        newFilters.add(type);
      }
      return newFilters;
    });
  }

  isFilterActive(type: PresentationType): boolean {
    return this.activeFilters().has(type);
  }
}
