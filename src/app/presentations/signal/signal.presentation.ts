import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { WhySignalsZoneSlide } from './slides/02-why-signals-zone/why-signals-zone.slide';
import { WhySignalsRxjsSlide } from './slides/03-why-signals-rxjs/why-signals-rxjs.slide';
import { WhySignalsAsyncPipeSlide } from './slides/04-why-signals-async-pipe/why-signals-async-pipe.slide';
import { BasicSignalSlide } from './slides/05-basic-signal/basic-signal.slide';
import { BasicComputedSlide } from './slides/06-basic-computed/basic-computed.slide';
import { ComputedOptionsSlide } from './slides/07-computed-options/computed-options.slide';
import { BasicEffectSlide } from './slides/07-basic-effect/basic-effect.slide';
import { BasicDifferenceSlide } from './slides/08-basic-difference/basic-difference.slide';
import { InteractionInputSlide } from './slides/09-interaction-input/interaction-input.slide';
import { InteractionEffectSlide } from './slides/10-interaction-effect/interaction-effect.slide';
import { RxjsInteropSlide } from './slides/11-rxjs-interop/rxjs-interop.slide';
import { RxjsOperatorsSlide } from './slides/12-rxjs-operators/rxjs-operators.slide';
import { ResourcesIntroSlide } from './slides/13-resources-intro/resources-intro.slide';
import { ResourcesHttpSlide } from './slides/14-resources-http/resources-http.slide';
import { ResourcesLegacySlide } from './slides/15-resources-legacy/resources-legacy.slide';
import { DemoResourceSlide } from './slides/16-demo-resource/demo-resource.slide';
import { LimitationsSlide } from './slides/16-limitations/limitations.slide';
import { DecisionSlide } from './slides/17-decision/decision.slide';
import { NgrxSignalsSlide } from './slides/18-ngrx-signals/ngrx-signals.slide';
import { LintRuleSlide } from './slides/19-lint-rule/lint-rule.slide';
import { ThanksSlide } from './slides/20-thanks/thanks.slide';

// Register Swiper web components
register();

@Component({
  selector: 'app-signal-presentation',
  templateUrl: './signal.presentation.html',
  styleUrl: './signal.presentation.scss',
  imports: [
    WhySignalsZoneSlide,
    WhySignalsRxjsSlide,
    WhySignalsAsyncPipeSlide,
    BasicSignalSlide,
    BasicComputedSlide,
    ComputedOptionsSlide,
    BasicEffectSlide,
    BasicDifferenceSlide,
    InteractionInputSlide,
    InteractionEffectSlide,
    RxjsInteropSlide,
    RxjsOperatorsSlide,
    ResourcesIntroSlide,
    ResourcesHttpSlide,
    ResourcesLegacySlide,
    DemoResourceSlide,
    LimitationsSlide,
    DecisionSlide,
    NgrxSignalsSlide,
    LintRuleSlide,
    ThanksSlide
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SignalPresentation implements OnInit {
  ngOnInit(): void {
    // Initialize Swiper after view is ready
  }
}
