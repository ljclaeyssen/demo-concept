import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { DynamicDialogRef, DialogService } from 'primeng/dynamicdialog';
import { Button } from 'primeng/button';

@Component({
  selector: 'app-operators-demo-dialog',
  template: `
    <div class="dialog-container">
      <div class="dialog-header">
        <h2>🎮 Démo interactive des opérateurs</h2>
        <p-button icon="pi pi-times" [text]="true" [rounded]="true" severity="secondary" (onClick)="close()" />
      </div>
      <div class="iframe-container">
        <iframe
          src="https://ljclaeyssen.github.io/rxjs-visu/#/main-operators"
          width="800"
          height="600">
        </iframe>
      </div>
    </div>
  `,
  styles: [`
    .dialog-container {
      display: flex;
      flex-direction: column;
      height: 100%;
    }

    .dialog-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 0 1rem 0;
      border-bottom: 1px solid #e2e8f0;
      margin-bottom: 1rem;

      h2 {
        margin: 0;
        font-size: 1.25rem;
        color: #1e293b;
      }
    }

    .iframe-container {
      flex: 1;
      border-radius: 8px;
      overflow: hidden;

      iframe {
        border: none;
        display: block;
      }
    }
  `],
  imports: [Button],
  providers: [DialogService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OperatorsDemoDialogComponent {
  private ref = inject(DynamicDialogRef);

  close(): void {
    this.ref.close();
  }
}
