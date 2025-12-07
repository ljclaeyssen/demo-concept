import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { Highlight } from 'ngx-highlightjs';
import { TestSwitchComponent } from '../../components/test-switch.component';

@Component({
  selector: 'app-service-method-slide',
  templateUrl: './service-method.slide.html',
  styleUrl: './service-method.slide.scss',
  imports: [Highlight, TestSwitchComponent],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ServiceMethodSlide {
  serviceCode = signal(`// calculator.service.ts
@Injectable({ providedIn: 'root' })
export class CalculatorService {
  add(a: number, b: number): number {
    return a + b;
  }

  multiply(a: number, b: number): number {
    return a * b;
  }

  isEven(n: number): boolean {
    return n % 2 === 0;
  }
}`);

  karmaTestCode = signal(`// calculator.service.spec.ts
describe('CalculatorService', () => {
  let service: CalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add two numbers', () => {
    expect(service.add(2, 3)).toBe(5);
  });

  it('should multiply two numbers', () => {
    expect(service.multiply(3, 4)).toBe(12);
  });

  it('should return true for even numbers', () => {
    expect(service.isEven(4)).toBeTrue();
    expect(service.isEven(3)).toBeFalse();
  });
});`);

  vitestTestCode = signal(`// calculator.service.spec.ts
describe('CalculatorService', () => {
  let service: CalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add two numbers', () => {
    expect(service.add(2, 3)).toBe(5);
  });

  it('should multiply two numbers', () => {
    expect(service.multiply(3, 4)).toBe(12);
  });

  it('should return true for even numbers', () => {
    expect(service.isEven(4)).toBe(true);  // pas de toBeTrue()
    expect(service.isEven(3)).toBe(false); // pas de toBeFalse()
  });
});`);
}
