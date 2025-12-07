import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { Highlight } from 'ngx-highlightjs';
import { TestSwitchComponent } from '../../components/test-switch.component';

@Component({
  selector: 'app-component-method-slide',
  templateUrl: './component-method.slide.html',
  styleUrl: './component-method.slide.scss',
  imports: [Highlight, TestSwitchComponent],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComponentMethodSlide {
  componentCode = signal(`// counter.component.ts
@Component({
  selector: 'app-counter',
  template: \`
    <p>Count: {{ count }}</p>
    <button (click)="increment()">+</button>
    <button (click)="decrement()">-</button>
    <button (click)="reset()">Reset</button>
  \`
})
export class CounterComponent {
  count = 0;

  increment(): void {
    this.count++;
  }

  decrement(): void {
    if (this.count > 0) {
      this.count--;
    }
  }

  reset(): void {
    this.count = 0;
  }
}`);

  karmaTestCode = signal(`// counter.component.spec.ts
describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CounterComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should increment count', () => {
    component.increment();
    expect(component.count).toBe(1);
  });

  it('should not decrement below 0', () => {
    component.count = 0;
    component.decrement();
    expect(component.count).toBe(0);
  });

  it('should reset count to 0', () => {
    component.count = 5;
    component.reset();
    expect(component.count).toBe(0);
  });
});`);

  vitestTestCode = signal(`// counter.component.spec.ts
describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterComponent]  // standalone component
    }).compileComponents();

    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should increment count', () => {
    component.increment();
    expect(component.count).toBe(1);
  });

  it('should not decrement below 0', () => {
    component.count = 0;
    component.decrement();
    expect(component.count).toBe(0);
  });

  it('should reset count to 0', () => {
    component.count = 5;
    component.reset();
    expect(component.count).toBe(0);
  });
});`);
}
