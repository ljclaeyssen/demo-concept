import { Component, ChangeDetectionStrategy, signal, inject } from '@angular/core';
import { Highlight } from 'ngx-highlightjs';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Button } from 'primeng/button';
import { OperatorsDemoDialogComponent } from '../../demo/operators-demo-dialog.component';

@Component({
  selector: 'app-mapping-operators-slide',
  templateUrl: './mapping-operators.slide.html',
  styleUrl: './mapping-operators.slide.scss',
  imports: [Highlight, Button],
  providers: [DialogService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MappingOperatorsSlide {
  private dialogService = inject(DialogService);
  private ref: DynamicDialogRef | null = null;

  openDemo(): void {
    this.ref = this.dialogService.open(OperatorsDemoDialogComponent, {
      header: 'RxJS Operators Visualizer',
      width: '860px',
      modal: true,
      dismissableMask: true,
      styleClass: 'operators-demo-dialog'
    });
  }
  switchMapCode = signal(`// switchMap : annule le précédent
searchInput$.pipe(
  debounceTime(300),
  switchMap(term => this.http.get(\`/search?q=\${term}\`))
)
// ✅ Parfait pour : recherche, navigation`);

  mergeMapCode = signal(`// mergeMap : exécute tous en parallèle
uploadFiles$.pipe(
  mergeMap(file => this.uploadService.upload(file))
)
// ✅ Parfait pour : uploads parallèles`);

  concatMapCode = signal(`// concatMap : attend la fin avant le suivant
saveActions$.pipe(
  concatMap(action => this.api.save(action))
)
// ✅ Parfait pour : ordre garanti`);

  exhaustMapCode = signal(`// exhaustMap : ignore pendant l'exécution
submitButton$.pipe(
  exhaustMap(() => this.api.submit(form))
)
// ✅ Parfait pour : anti double-clic`);
}
