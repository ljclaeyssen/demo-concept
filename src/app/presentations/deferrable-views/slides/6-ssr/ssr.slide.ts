import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { Highlight } from 'ngx-highlightjs';

@Component({
  selector: 'app-ssr-slide',
  templateUrl: './ssr.slide.html',
  styleUrl: './ssr.slide.scss',
  imports: [Highlight],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SsrSlide {
  ssrBehaviorCode = signal(`// ========================================
// &#64;defer fonctionne parfaitement avec SSR
// ========================================

&#64;defer (on viewport) {
  <app-comments />
} &#64;placeholder {
  <comments-skeleton />  // ← Rendu SSR (HTML statique)
}

// ========================================
// Comportement Server-Side :
// ========================================

// 1. Server rend le &#64;placeholder en HTML statique
// 2. Le chunk comments.js n'est PAS inclus
// 3. HTML initial rapide et léger

// HTML généré côté serveur :
<div>
  <comments-skeleton></comments-skeleton>  ← HTML statique
</div>

// ✅ SEO friendly (placeholder visible pour crawlers)
// ✅ HTML initial rapide (pas de chunk lourd)
// ✅ FCP ultra-rapide`);

  hydrationCode = signal(`// ========================================
// Comportement Client-Side (Hydration)
// ========================================

// 1. Browser reçoit le HTML avec placeholder
// 2. Angular hydrate la page
// 3. IntersectionObserver s'active
// 4. Quand visible → Chunk téléchargé
// 5. Placeholder remplacé par le composant réel

// Timeline :
// 0ms    : HTML reçu (avec placeholder)
// 100ms  : Hydration complète
// 100ms  : IntersectionObserver actif
// (user scroll)
// 500ms  : Chunk comments.js téléchargé
// 700ms  : Composant affiché

// ✅ Hydration progressive (seulement le visible)
// ✅ Pas de flash de contenu
// ✅ Expérience fluide`);

  ssrPrefetchCode = signal(`// ========================================
// SSR + Prefetch = Performance maximale
// ========================================

&#64;defer (on viewport; prefetch on idle) {
  <app-comments />
} &#64;placeholder {
  <comments-skeleton />
}

// Comportement :
// 1. SSR → HTML avec placeholder ✅
// 2. Client → Hydration ✅
// 3. Browser idle → Prefetch chunk ✅
// 4. User scroll → Chunk déjà en cache ✅
// 5. Affichage INSTANTANÉ ⚡

// Résultat :
Initial HTML:     80 KB  ✅ (avec placeholder)
FCP:              0.8s  ✅ (HTML statique)
LCP:              1.0s  ✅ (pas de chunk lourd)
Scroll + display: 0ms   ✅ (déjà prefetché)

// Perfect score Lighthouse + SEO optimal !`);
}
