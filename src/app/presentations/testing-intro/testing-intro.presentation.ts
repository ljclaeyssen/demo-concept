import { Component, ChangeDetectionStrategy, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';

import { TestingTitleSlide } from './slides/01-title/title.slide';
import { ServiceMethodSlide } from './slides/02-service-method/service-method.slide';
import { HttpRequestSlide } from './slides/03-http-request/http-request.slide';
import { MockHttpSlide } from './slides/04-mock-http/mock-http.slide';
import { ComponentMethodSlide } from './slides/05-component-method/component-method.slide';
import { ButtonClickSlide } from './slides/06-button-click/button-click.slide';
import { FormValidationSlide } from './slides/07-form-validation/form-validation.slide';
import { MockServiceSlide } from './slides/08-mock-service/mock-service.slide';

register();

@Component({
  selector: 'app-testing-intro-presentation',
  templateUrl: './testing-intro.presentation.html',
  styleUrl: './testing-intro.presentation.scss',
  imports: [
    TestingTitleSlide,
    ServiceMethodSlide,
    HttpRequestSlide,
    MockHttpSlide,
    ComponentMethodSlide,
    ButtonClickSlide,
    FormValidationSlide,
    MockServiceSlide
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestingIntroPresentation {}
