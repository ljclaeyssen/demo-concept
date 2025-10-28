import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { Highlight } from 'ngx-highlightjs';

@Component({
  selector: 'app-real-impact-slide',
  templateUrl: './real-impact.slide.html',
  styleUrl: './real-impact.slide.scss',
  imports: [Highlight],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RealImpactSlide {
  beforeCode = signal(`// ========================================
// AVANT &#64;defer - Chargement eager
// ========================================

// main.js : TOUT est inclus
import { HeaderComponent } from './header';          //   50 KB
import { HeroComponent } from './hero';              //   80 KB
import { CommentsComponent } from './comments';      //  300 KB
import { AnalyticsComponent } from './analytics';    //  700 KB
import { PdfViewerComponent } from './pdf-viewer';   // 1200 KB
import { FooterComponent } from './footer';          //   40 KB

// ========================================
// Bundle size total : 2.37 MB
// ========================================

// Métriques (3G network) :
Initial Bundle:       2.37 MB  ❌
FCP:                     3.2s  ❌
LCP:                     4.1s  ❌
TTI:                    12.0s  ❌
Lighthouse Score:         42  ❌`);

  afterCode = signal(`// ========================================
// APRÈS &#64;defer - Chargement intelligent
// ========================================

// main.js : Seulement le nécessaire
import { HeaderComponent } from './header';    //  50 KB
import { HeroComponent } from './hero';        //  80 KB
import { FooterComponent } from './footer';    //  40 KB

// Chunks séparés (chargés on-demand) :
// comments-*.js     →  300 KB (defer on viewport)
// analytics-*.js    →  700 KB (defer on idle)
// pdf-viewer-*.js   → 1200 KB (defer on interaction)

// ========================================
// Bundle initial : 170 KB (-93% !)
// ========================================

// Métriques (3G network) :
Initial Bundle:      170 KB  ✅ (-93%)
FCP:                  1.1s  ✅ (-66%)
LCP:                  1.4s  ✅ (-66%)
TTI:                  2.5s  ✅ (-79%)
Lighthouse Score:      96  ✅ (+129%)`);

  realExampleCode = signal(`// ========================================
// Exemple concret : Page Article de blog
// ========================================

// Statistiques d'utilisation réelles :
// • 100% des users voient : Header + Article
// • 20% des users scrollent jusqu'aux comments
// • 5% des users cliquent sur "Export PDF"
// • 0% utilisent analytics (background)

// Sans &#64;defer :
// → 100% des users chargent 2.37 MB
// → 80% ne voient jamais les comments (300 KB gaspillés)
// → 95% n'exportent jamais en PDF (1.2 MB gaspillés)

// Avec &#64;defer :
// → 100% des users chargent 170 KB
// → 20% chargent +300 KB (comments)
// → 5% chargent +1.2 MB (PDF)
// → Économie moyenne par utilisateur : 1.8 MB (76%)`);
}
