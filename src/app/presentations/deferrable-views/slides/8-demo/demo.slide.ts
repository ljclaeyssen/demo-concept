import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { Highlight } from 'ngx-highlightjs';

@Component({
  selector: 'app-demo-slide',
  templateUrl: './demo.slide.html',
  styleUrl: './demo.slide.scss',
  imports: [Highlight],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemoSlide {
  demoCode = signal(`// ========================================
// Démo : Page article avec &#64;defer
// ========================================

<article>
  <!-- Chargé immédiatement (above-the-fold) -->
  <app-header />
  <app-article-content />

  <!-- Defer on viewport : Comments -->
  &#64;defer (on viewport; prefetch on idle) {
    <app-comments-section />
    // Chunk : 300 KB
    // Chargé au scroll
    // Prefetch pendant idle time
  } &#64;loading (minimum 500ms) {
    <comments-skeleton />
  } &#64;placeholder {
    <div class="comments-placeholder">
      💬 Commentaires (scroll pour charger)
    </div>
  }

  <!-- Defer on interaction : Export PDF -->
  &#64;defer (on interaction; prefetch on hover) {
    <app-pdf-exporter />
    // Chunk : 1.2 MB
    // Chargé au clic sur "Export PDF"
    // Prefetch au hover du bouton
  } &#64;loading {
    <p>Chargement de l'exporteur PDF...</p>
  }

  <!-- Defer on idle : Analytics -->
  &#64;defer (on idle) {
    <app-analytics-tracker />
    // Chunk : 200 KB
    // Chargé quand browser idle
    // Non critique, background
  }
</article>`);

  metricsCode = signal(`// ========================================
// Résultats de la démo
// ========================================

// AVANT &#64;defer :
Initial Bundle:     2.0 MB
Chunks loaded:      1 (main.js)
FCP:                3.5s
LCP:                4.8s
TTI:               11.0s

// APRÈS &#64;defer :
Initial Bundle:     400 KB  (-80% !)
Chunks loaded:      1 (main.js)
FCP:                1.2s  (-66%)
LCP:                1.6s  (-67%)
TTI:                2.8s  (-75%)

// Chunks additionnels (on-demand) :
comments-*.js       300 KB  (chargé au scroll)
pdf-*.js           1200 KB  (chargé au clic)
analytics-*.js      200 KB  (chargé idle)

// Économie moyenne par user : 1.4 MB (70%)
// (La plupart des users ne cliquent jamais sur "Export PDF")`);

  nextStepsCode = signal(`// ========================================
// Comment tester &#64;defer dans votre app
// ========================================

// 1. Identifier les composants lourds
ng build --stats-json
npx webpack-bundle-analyzer dist/stats.json
// → Trouvez les chunks >100 KB

// 2. Mesurer le baseline
npx lighthouse http://localhost:4200
// → Notez FCP, LCP, TTI actuels

// 3. Ajouter &#64;defer sur les gros composants
&#64;defer (on viewport) {
  <app-heavy-component />
}

// 4. Mesurer l'amélioration
ng build --configuration production
npx lighthouse http://localhost:4200
// → Comparez les gains !

// 5. Tester en Network tab
// → Vérifiez que les chunks lazy-load
// → Testez les différents triggers

// 6. Itérer et optimiser
// → Ajoutez prefetch strategies
// → Gérez &#64;loading/&#64;placeholder/&#64;error`);
}
