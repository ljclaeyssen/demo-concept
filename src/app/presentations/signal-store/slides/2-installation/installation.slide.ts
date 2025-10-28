import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { Highlight } from 'ngx-highlightjs';

@Component({
  selector: 'app-installation-slide',
  templateUrl: './installation.slide.html',
  styleUrl: './installation.slide.scss',
  imports: [Highlight],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InstallationSlide {
  ngrxInstallCode = signal(`# ========================================
# Installation NgRx Store
# ========================================

npm install @ngrx/store          # Store de base (requis)
npm install @ngrx/effects        # Side-effects (requis)
npm install @ngrx/store-devtools # Debugging (requis)

# Packages facultatifs (mais souvent nécessaires) :
npm install @ngrx/operators      # tapResponse, etc.
npm install @ngrx/entity         # Gestion CRUD entities
npm install @ngrx/router-store   # Intégration router

# ❌ Au moins 3 packages, souvent 5-6 en pratique
# ❌ Plus de dépendances = plus de maintenance
# ❌ Bundle size plus important`);

  signalStoreInstallCode = signal(`# ========================================
# Installation Signal Store
# ========================================

npm install @ngrx/signals

# ✅ 1 seul package !
# ✅ Tout est inclus (state + computed + methods)
# ✅ Utilise RxJS natif (tap, catchError)
# ✅ Pas besoin d'équivalent pour entity/router-store
# ✅ Bundle size optimisé`);
}
