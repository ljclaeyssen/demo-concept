import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { Highlight } from 'ngx-highlightjs';
import { TestSwitchComponent } from '../../components/test-switch.component';

@Component({
  selector: 'app-button-click-slide',
  templateUrl: './button-click.slide.html',
  styleUrl: './button-click.slide.scss',
  imports: [Highlight, TestSwitchComponent],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonClickSlide {
  componentCode = signal(`// counter.component.ts
@Component({
  selector: 'app-counter',
  template: \`
    <p class="count-display">{{ count }}</p>
    <button class="btn-increment" (click)="increment()">+</button>
    <button class="btn-reset" (click)="reset()">Reset</button>
  \`
})
export class CounterComponent {
  count = 0;

  increment(): void {
    this.count++;
  }

  reset(): void {
    this.count = 0;
  }
}`);

  karmaTestCode = signal(`// counter.component.spec.ts
describe('CounterComponent - DOM', () => {
  let fixture: ComponentFixture<CounterComponent>;
  let debugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CounterComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CounterComponent);
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should display count in template', () => {
    const countEl = debugElement.query(By.css('.count-display'));
    expect(countEl.nativeElement.textContent).toBe('0');
  });

  it('should increment on button click', () => {
    const button = debugElement.query(By.css('.btn-increment'));
    button.triggerEventHandler('click', null);
    fixture.detectChanges();

    const countEl = debugElement.query(By.css('.count-display'));
    expect(countEl.nativeElement.textContent).toBe('1');
  });

  it('should reset on reset button click', () => {
    fixture.componentInstance.count = 5;
    fixture.detectChanges();

    const resetBtn = debugElement.query(By.css('.btn-reset'));
    resetBtn.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(fixture.componentInstance.count).toBe(0);
  });
});`);

  vitestTestCode = signal(`// counter.component.spec.ts
describe('CounterComponent - DOM', () => {
  let fixture: ComponentFixture<CounterComponent>;
  let debugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CounterComponent);
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should display count in template', () => {
    const countEl = debugElement.query(By.css('.count-display'));
    expect(countEl.nativeElement.textContent).toBe('0');
  });

  it('should increment on button click', () => {
    const button = debugElement.query(By.css('.btn-increment'));
    button.triggerEventHandler('click', null);
    fixture.detectChanges();

    const countEl = debugElement.query(By.css('.count-display'));
    expect(countEl.nativeElement.textContent).toBe('1');
  });

  it('should reset on reset button click', () => {
    fixture.componentInstance.count = 5;
    fixture.detectChanges();

    const resetBtn = debugElement.query(By.css('.btn-reset'));
    resetBtn.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(fixture.componentInstance.count).toBe(0);
  });
});`);
}
