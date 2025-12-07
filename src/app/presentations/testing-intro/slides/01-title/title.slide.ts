import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-testing-title-slide',
  templateUrl: './title.slide.html',
  styleUrl: './title.slide.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestingTitleSlide {}
