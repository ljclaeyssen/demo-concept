import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { Highlight } from 'ngx-highlightjs';

@Component({
  selector: 'app-when-to-use-slide',
  templateUrl: './when-to-use.slide.html',
  styleUrl: './when-to-use.slide.scss',
  imports: [Highlight],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WhenToUseSlide {
  goodCandidatesCode = signal(`// ========================================
// ✅ Bons candidats pour &#64;defer
// ========================================

// 1. Composants LOURDS (>100 KB)
&#64;defer (on interaction) {
  <app-pdf-viewer />       // 1.2 MB - Monaco, PDF.js
  <app-code-editor />      // 800 KB - Monaco Editor
  <app-rich-text-editor /> // 600 KB - TinyMCE/CKEditor
  <app-chart-library />    // 500 KB - ApexCharts/D3
}

// 2. Composants OPTIONNELS (pas toujours vus)
&#64;defer (on viewport) {
  <app-comments />         // 80% users ne scrollent pas
  <app-related-articles /> // Below fold
  <app-footer />          // Rarement atteint
}

// 3. Composants CONDITIONNELS
&#64;defer (when isPremium()) {
  <app-premium-features /> // 5% des users seulement
}

&#64;defer (on interaction) {
  <app-modal />           // Ouvert conditionnellement
  <app-sidebar />         // Toggle on/off
}

// 4. Composants de FOND (non-critiques)
&#64;defer (on idle) {
  <app-analytics />       // Tracking background
  <app-chat-widget />     // Support chat
  <app-cookie-banner />   // GDPR
}`);

  badCandidatesCode = signal(`// ========================================
// ❌ Ne PAS utiliser &#64;defer pour :
// ========================================

// 1. Contenu ABOVE-THE-FOLD (toujours visible)
// ❌ MAUVAIS
&#64;defer (on viewport) {
  <app-hero />  // Toujours visible = inutile
  <app-header /> // Navigation critique
}
// ✅ BON
<app-hero />
<app-header />

// 2. Contenu CRITIQUE pour SEO
// ❌ MAUVAIS
&#64;defer (on interaction) {
  <app-product-description />  // Google ne voit pas !
}
// ✅ BON (avec placeholder SEO)
&#64;defer (on viewport; prefetch on immediate) {
  <app-reviews />
} &#64;placeholder {
  <div>4.5/5 ⭐ (234 avis)</div>  // HTML pour SEO
}

// 3. Composants LÉGERS (<10 KB)
// ❌ MAUVAIS (overhead > gain)
&#64;defer (on viewport) {
  <app-simple-button />  // 2 KB seulement
}

// 4. Contenu utilisé à 100%
// ❌ MAUVAIS
&#64;defer (on viewport) {
  <app-navigation />  // Tout le monde la voit
}`);

  bestPracticesCode = signal(`// ========================================
// 🎯 Best Practices
// ========================================

// ✅ DO: Combiner avec prefetch pour UX optimale
&#64;defer (on interaction; prefetch on hover) {
  <app-composer />  // Hover = intent → prefetch
}

// ✅ DO: Utiliser &#64;placeholder pour réserver l'espace
&#64;defer (on viewport) {
  <app-chart height="400px" />
} &#64;placeholder {
  <div style="height: 400px">...</div>  // Évite layout shift
}

// ✅ DO: Gérer &#64;error gracefully
&#64;defer (on viewport) {
  <app-comments />
} &#64;error {
  <p>Impossible de charger les commentaires</p>
}

// ✅ DO: Utiliser minimum/after pour éviter flash
&#64;defer (on viewport) {
  <app-component />
} &#64;loading (minimum 500ms; after 100ms) {
  <skeleton />  // Évite flash si cache
}

// ❌ DON'T: Sur-optimiser
// Ne pas defer des composants de 5 KB
// Focusez sur les gros gains (>100 KB)`);
}
