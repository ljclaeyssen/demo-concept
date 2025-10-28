import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { Highlight } from 'ngx-highlightjs';

@Component({
  selector: 'app-prefetch-slide',
  templateUrl: './prefetch.slide.html',
  styleUrl: './prefetch.slide.scss',
  imports: [Highlight],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PrefetchSlide {
  prefetchStrategiesCode = signal(`// ========================================
// 4 stratégies de prefetch disponibles
// ========================================

// 1. Prefetch on IDLE - Télécharge pendant idle time
&#64;defer (on interaction; prefetch on idle) {
  <app-composer />
}
// → Chunk téléchargé en avance
// → Clic = affichage instantané ✨

// 2. Prefetch on IMMEDIATE - Télécharge ASAP
&#64;defer (on viewport; prefetch on immediate) {
  <app-comments />
}
// → Chunk déjà là quand user scroll
// → Zéro délai d'affichage

// 3. Prefetch on TIMER - Télécharge après X ms
&#64;defer (on interaction; prefetch on timer(5000ms)) {
  <app-modal />
}
// → Chunk prêt après 5s
// → Si user clique après 5s = instant

// 4. Prefetch on HOVER - Anticipe l'intent
&#64;defer (on interaction; prefetch on hover) {
  <app-tooltip-rich />
}
// → User hover = intent détecté
// → Téléchargement commence
// → Clic = déjà 30-50% téléchargé`);

  useCasesCode = signal(`// ========================================
// Patterns recommandés (Best UX)
// ========================================

// Pattern 1: High-probability interaction
&#64;defer (on interaction; prefetch on idle) {
  <app-search-modal />
}
// User va probablement chercher
// → Prefetch idle → Clic instant

// Pattern 2: Low-probability interaction
&#64;defer (on interaction) {
  <app-export-pdf />
}
// Peu de users exportent
// → Pas de prefetch → Économise bandwidth

// Pattern 3: Anticipation hover (Gmail-like)
&#64;defer (on interaction; prefetch on hover) {
  <app-rich-composer />  // 1.2 MB
}
// User hover bouton "Nouveau message"
// → Intent détecté → Préchargement
// → Clic 300ms plus tard → Déjà 40% chargé
// → Loading time perçu : -70%

// Pattern 4: Background prefetch
&#64;defer (on viewport; prefetch on timer(10s)) {
  <app-heavy-chart />
}
// Laisse 10s au critical path
// Puis prefetch en background
// Prêt si user scroll`);

  realExampleCode = signal(`// ========================================
// Exemple concret : Gmail Composer
// ========================================

<button (mouseenter)="onComposeHover()">
  Nouveau message
</button>

&#64;defer (on interaction; prefetch on hover) {
  <app-rich-composer />
  // Chunk : 1.2 MB (Monaco-like editor)

} &#64;loading (minimum 300ms) {
  <p-skeleton />
}

// Timeline sans prefetch :
// 0ms   : User clique
// 0-2s  : Téléchargement chunk (1.2 MB sur 3G)
// 2s    : Affichage composant
// UX   : 😤 2 secondes d'attente

// Timeline avec prefetch on hover :
// 0ms   : User hover le bouton
// 0-300ms : Préchargement (déjà ~400 KB)
// 300ms : User clique
// 300-1.2s : Fin téléchargement (800 KB restants)
// 1.2s  : Affichage composant
// UX   : 😊 -40% de temps perçu`);
}
