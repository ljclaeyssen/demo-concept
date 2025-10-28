import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { Highlight } from 'ngx-highlightjs';

@Component({
  selector: 'app-triggers-slide',
  templateUrl: './triggers.slide.html',
  styleUrl: './triggers.slide.scss',
  imports: [Highlight],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TriggersSlide {
  triggersCode = signal(`// ========================================
// Les 7 triggers disponibles avec &#64;defer
// ========================================

// 1. IMMEDIATE - Charge dès que possible (défaut)
&#64;defer {
  <app-component />
}

// 2. ON IDLE - Quand le browser est idle
&#64;defer (on idle) {
  <app-analytics />  // requestIdleCallback()
}

// 3. ON VIEWPORT - Quand visible à l'écran
&#64;defer (on viewport) {
  <app-comments />  // IntersectionObserver
}

// 4. ON INTERACTION - Au clic/focus/touch
&#64;defer (on interaction) {
  <app-composer />  // Event listeners
}

// 5. ON HOVER - Au survol
&#64;defer (on hover) {
  <app-tooltip />
}

// 6. ON TIMER - Après X millisecondes
&#64;defer (on timer(5000ms)) {
  <app-chat-widget />  // setTimeout()
}

// 7. WHEN (condition) - Signal/Observable
&#64;defer (when isAuthenticated()) {
  <app-dashboard />  // Effect
}`);

  blocksCode = signal(`// ========================================
// Les 4 blocs disponibles
// ========================================

&#64;defer (on viewport) {
  // Contenu principal (chargé après trigger)
  <app-comments />

} &#64;loading (minimum 500ms; after 100ms) {
  // Pendant le téléchargement du chunk JS
  <app-skeleton />

} &#64;placeholder (minimum 1s) {
  // Avant que le trigger soit activé
  <div>Scroll pour charger...</div>

} &#64;error {
  // Si le chunk JS fail à charger
  <div>Erreur de chargement</div>
}

// Paramètres :
// • minimum: Durée min d'affichage (évite flash)
// • after: Délai avant affichage (évite flash si cache)`);

  combinationsCode = signal(`// ========================================
// Combinaisons de triggers (OR logic)
// ========================================

// Charge au clic OU après 10s
&#64;defer (on interaction; on timer(10s)) {
  <app-modal />
}

// Charge au hover OU au viewport
&#64;defer (on hover; on viewport) {
  <app-tooltip-advanced />
}

// Charge quand idle OU après 5s
&#64;defer (on idle; on timer(5000ms)) {
  <app-background-task />
}

// Use case pratique :
&#64;defer (on interaction; when userHasPremium()) {
  <app-premium-feature />
  // Charge si user clique ET qu'il est premium
}`);
}
