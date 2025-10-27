import { Component, ChangeDetectionStrategy, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { IntroSlide } from './slides/intro.slide';
import { BoilerplateNightmareSlide } from './slides/boilerplate-nightmare.slide';
import { StateUpdatesSlide } from './slides/state-updates.slide';

register();

@Component({
  selector: 'app-signal-store-presentation',
  templateUrl: './signal-store.presentation.html',
  styleUrl: './signal-store.presentation.scss',
  imports: [IntroSlide, BoilerplateNightmareSlide, StateUpdatesSlide],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignalStorePresentation {}
