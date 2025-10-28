import { Component, ChangeDetectionStrategy, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { IntroSlide } from './slides/1-intro/intro.slide';
import { SolutionsComparisonSlide } from './slides/2-solutions-comparison/solutions-comparison.slide';
import { RealImpactSlide } from './slides/3-real-impact/real-impact.slide';
import { TriggersSlide } from './slides/4-triggers/triggers.slide';
import { PrefetchSlide } from './slides/5-prefetch/prefetch.slide';
import { SsrSlide } from './slides/6-ssr/ssr.slide';
import { WhenToUseSlide } from './slides/7-when-to-use/when-to-use.slide';
import { DemoSlide } from './slides/8-demo/demo.slide';

register();

@Component({
  selector: 'app-deferrable-views-presentation',
  templateUrl: './deferrable-views.presentation.html',
  styleUrl: './deferrable-views.presentation.scss',
  imports: [IntroSlide, SolutionsComparisonSlide, RealImpactSlide, TriggersSlide, PrefetchSlide, SsrSlide, WhenToUseSlide, DemoSlide],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeferrableViewsPresentation {}
