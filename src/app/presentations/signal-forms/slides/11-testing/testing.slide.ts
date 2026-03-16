import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { Highlight } from 'ngx-highlightjs';

@Component({
  selector: 'app-sf-testing-slide',
  templateUrl: './testing.slide.html',
  styleUrl: './testing.slide.scss',
  imports: [Highlight],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestingSlide {
  reactiveCode = signal(`describe('AdresseFormGroup', () => {

  it('should be invalid without rue', () => {
    const fg = new AdresseFormGroup();
    expect(fg.valid).toBe(false);
    expect(fg.controls.rue.errors)
      .toEqual({ required: true });
  });

  it('should validate CP format FR', () => {
    const fg = new AdresseFormGroup({
      rue: '1 rue de la Paix',
      ville: 'Paris',
      pays: 'FR',
      codePostal: 'ABC',
    });
    expect(fg.errors)
      .toEqual({ cpFormatFR: true });
  });

  it('should accept valid adresse', () => {
    const fg = new AdresseFormGroup({
      rue: '1 rue de la Paix',
      codePostal: '75001',
      ville: 'Paris',
      pays: 'FR',
    });
    expect(fg.valid).toBe(true);
  });
});

// Pur TypeScript — pas de TestBed
// ⚠️ Dès qu'on ajoute takeUntilDestroyed
//    → injection context requis`);

  signalCode = signal(`describe('createAdresseForm', () => {

  it('should be invalid without rue', () => {
    TestBed.configureTestingModule({});
    const f = TestBed.runInInjectionContext(
      () => createAdresseForm()
    );
    expect(f().invalid()).toBe(true);
    expect(f.rue().errors()).toContainEqual(
      expect.objectContaining({
        kind: 'required'
      })
    );
  });

  it('should validate CP format FR', () => {
    TestBed.configureTestingModule({});
    const f = TestBed.runInInjectionContext(
      () => createAdresseForm({
        rue: '1 rue de la Paix',
        ville: 'Paris',
        pays: 'FR',
        codePostal: 'ABC',
      })
    );
    expect(f.codePostal().errors())
      .toContainEqual(
        expect.objectContaining({
          kind: 'cpFormatFR'
        })
      );
  });
});

// Nécessite TestBed + injection context
// Plus lourd à setup, assertions similaires`);
}
