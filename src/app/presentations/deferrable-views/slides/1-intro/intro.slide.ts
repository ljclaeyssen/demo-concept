import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { Highlight } from 'ngx-highlightjs';

@Component({
  selector: 'app-intro-slide',
  templateUrl: './intro.slide.html',
  styleUrl: './intro.slide.scss',
  imports: [Highlight],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IntroSlide {
  problemCode = signal(`// ========================================
// Le problème : Bundle initial trop lourd
// ========================================

// main.js (bundle initial)
import { HeaderComponent } from './header';          // 50 KB
import { HeroComponent } from './hero';              // 80 KB
import { CommentsComponent } from './comments';      // 300 KB ⚠️
import { AnalyticsComponent } from './analytics';    // 700 KB ⚠️
import { PdfViewerComponent } from './pdf-viewer';   // 1.2 MB ⚠️
import { FooterComponent } from './footer';          // 40 KB

// Total bundle : 2.37 MB 😱
// Temps de chargement 3G : ~8 secondes
// Time to Interactive (TTI) : ~12 secondes

// ❌ Problème : TOUT est chargé immédiatement
// ❌ Même ce qui n'est jamais utilisé !
// ❌ L'utilisateur attend pour rien`);

  statsCode = signal(`// ========================================
// Impact sur l'expérience utilisateur
// ========================================

// Statistiques réelles :
// • 53% des utilisateurs quittent si le chargement > 3s
// • Chaque seconde supplémentaire = -7% de conversion
// • Google pénalise les sites lents en SEO

// Votre app actuelle (sans optimisation) :
Initial Bundle:  2.37 MB
FCP (First Contentful Paint):   3.2s  ❌
LCP (Largest Contentful Paint): 4.1s  ❌
TTI (Time to Interactive):     12.0s  ❌

// Objectif (avec &#64;defer) :
Initial Bundle:  600 KB
FCP:   1.1s  ✅
LCP:   1.4s  ✅
TTI:   2.5s  ✅`);
}
