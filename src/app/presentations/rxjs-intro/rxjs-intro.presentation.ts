import { Component, ChangeDetectionStrategy, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';

import { TitleSlide } from './slides/01-title/title.slide';
import { WhatIsReactiveSlide } from './slides/02-what-is-reactive/what-is-reactive.slide';
import { CallbacksHellSlide } from './slides/03-callbacks-hell/callbacks-hell.slide';
import { WhyRxjsExampleSlide } from './slides/04-why-rxjs-example/why-rxjs-example.slide';
import { ObservableBasicsSlide } from './slides/04-observable-basics/observable-basics.slide';
import { ObserverPatternSlide } from './slides/05-observer-pattern/observer-pattern.slide';
import { SubscriptionSlide } from './slides/06-subscription/subscription.slide';
import { OperatorsIntroSlide } from './slides/08-operators-intro/operators-intro.slide';
import { MappingOperatorsSlide } from './slides/09-mapping-operators/mapping-operators.slide';
import { PracticalAngularSlide } from './slides/10-practical-angular/practical-angular.slide';
import { AsyncPipeSlide } from './slides/11-async-pipe/async-pipe.slide';
import { ConclusionSlide } from './slides/12-conclusion/conclusion.slide';

register();

@Component({
  selector: 'app-rxjs-intro-presentation',
  templateUrl: './rxjs-intro.presentation.html',
  styleUrl: './rxjs-intro.presentation.scss',
  imports: [
    TitleSlide,
    WhatIsReactiveSlide,
    CallbacksHellSlide,
    WhyRxjsExampleSlide,
    ObservableBasicsSlide,
    ObserverPatternSlide,
    SubscriptionSlide,
    OperatorsIntroSlide,
    MappingOperatorsSlide,
    PracticalAngularSlide,
    AsyncPipeSlide,
    ConclusionSlide
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RxjsIntroPresentation {}
