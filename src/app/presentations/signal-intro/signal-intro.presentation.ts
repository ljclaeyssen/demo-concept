import { Component, ChangeDetectionStrategy, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';

import { SignalIntroTitleSlide } from './slides/01-title/title.slide';
import { WhySignalsSlide } from './slides/02-why-signals/why-signals.slide';
import { SignalBasicsSlide } from './slides/03-signal-basics/signal-basics.slide';
import { ComputedBasicsSlide } from './slides/04-computed-basics/computed-basics.slide';
import { EffectBasicsSlide } from './slides/05-effect-basics/effect-basics.slide';
import { InputOutputSlide } from './slides/06-input-output/input-output.slide';
import { SignalIntroConclusionSlide } from './slides/07-conclusion/conclusion.slide';

register();

@Component({
  selector: 'app-signal-intro-presentation',
  templateUrl: './signal-intro.presentation.html',
  styleUrl: './signal-intro.presentation.scss',
  imports: [
    SignalIntroTitleSlide,
    WhySignalsSlide,
    SignalBasicsSlide,
    ComputedBasicsSlide,
    EffectBasicsSlide,
    InputOutputSlide,
    SignalIntroConclusionSlide
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignalIntroPresentation {}
