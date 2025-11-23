import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ContactsResourceDemoComponent } from '../../demo/contacts-resource-demo.component';

@Component({
  selector: 'app-demo-resource-slide',
  templateUrl: './demo-resource.slide.html',
  styleUrl: './demo-resource.slide.scss',
  imports: [ContactsResourceDemoComponent],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemoResourceSlide {}
