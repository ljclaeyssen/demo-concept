import { Component, ChangeDetectionStrategy, signal, computed, isDevMode } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PresentationType } from './models/presentation.model';
import { PresentationTypeLabelPipe } from './pipes/presentation-type-label.pipe';
import { FILTER_OPTIONS, PRESENTATIONS } from './constants/presentations.constants';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing.page.html',
  styleUrl: './landing.page.scss',
  imports: [RouterLink, FormsModule, PresentationTypeLabelPipe],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LandingPage {
  readonly filterOptions = FILTER_OPTIONS;

  selectedFilter = signal<PresentationType | 'all'>('all');

  presentations = computed(() => {
    let all = [...PRESENTATIONS];

    // Filter out Hello World in production
    if (!isDevMode()) {
      all = all.filter(p => p.route !== '/hello-world');
    }

    // Apply type filter
    const filter = this.selectedFilter();
    if (filter !== 'all') {
      all = all.filter(p => p.types.includes(filter));
    }

    return all;
  });

  onFilterChange(value: PresentationType | 'all'): void {
    this.selectedFilter.set(value);
  }
}
