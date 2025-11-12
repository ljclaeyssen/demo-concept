import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { Highlight } from 'ngx-highlightjs';

@Component({
  selector: 'app-basic-effect-slide',
  templateUrl: './basic-effect.slide.html',
  styleUrl: './basic-effect.slide.scss',
  imports: [Highlight],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BasicEffectSlide {
  basicCode = signal(`import { effect } from '@angular/core';

searchQuery = signal('');

constructor() {
  // Effect s'exécute quand searchQuery change
  effect(() => {
    console.log('Recherche:', this.searchQuery());
    // Logique de side-effect ici
  });
}`);

  practicalCode = signal(`userId = signal<string | null>(null);
userProfile = signal<UserProfile | null>(null);

constructor() {
  private http = inject(HttpClient);

  // Charge le profil quand userId change
  effect(() => {
    const id = this.userId();
    if (id) {
      this.http.get<UserProfile>(\`/users/\${id}\`)
        .subscribe(profile => {
          this.userProfile.set(profile);
        });
    }
  });
}`);
}
