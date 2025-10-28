import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { Highlight } from 'ngx-highlightjs';

@Component({
  selector: 'app-solutions-comparison-slide',
  templateUrl: './solutions-comparison.slide.html',
  styleUrl: './solutions-comparison.slide.scss',
  imports: [Highlight],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SolutionsComparisonSlide {
  lazyRoutesCode = signal(`// ========================================
// Solution classique : Lazy Loading Routes
// ========================================

const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard').then(m => m.DashboardComponent)
  },
  {
    path: 'analytics',
    loadComponent: () => import('./analytics').then(m => m.AnalyticsComponent)
  }
];

// ✅ Découpe le code par ROUTE
// ❌ Granularité limitée (niveau route seulement)
// ❌ Tout est chargé dès l'arrivée sur la route
// ❌ Pas de lazy loading intra-page
// ❌ Comments, PDF viewer, etc. = toujours chargés`);

  deferCode = signal(`// ========================================
// Solution moderne : &#64;defer (Angular 17+)
// ========================================

<app-header />
<app-hero />

&#64;defer (on viewport) {
  <app-comments />      <!-- 300 KB - Chargé au scroll -->
}

&#64;defer (on interaction) {
  <app-pdf-viewer />    <!-- 1.2 MB - Chargé au clic -->
}

&#64;defer (on idle) {
  <app-analytics />     <!-- 700 KB - Chargé quand idle -->
}

// ✅ Lazy loading au niveau COMPOSANT
// ✅ Granularité fine (template-level)
// ✅ Chargement conditionnel intelligent
// ✅ Zéro configuration, 100% déclaratif`);
}
