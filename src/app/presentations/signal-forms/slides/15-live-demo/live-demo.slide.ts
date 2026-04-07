import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { EligibiliteDemoComponent } from '../../demo/components/eligibilite-demo/eligibilite-demo.component';
import { CodeComparisonDialogComponent } from '../../demo/components/code-comparison-dialog/code-comparison-dialog.component';

@Component({
  selector: 'app-sf-live-demo-slide',
  templateUrl: './live-demo.slide.html',
  styleUrl: './live-demo.slide.scss',
  imports: [ButtonModule, EligibiliteDemoComponent],
  providers: [DialogService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SfLiveDemoSlide {
  private dialogService = inject(DialogService);
  private ref: DynamicDialogRef | null = null;

  openCodeDialog() {
    this.ref = this.dialogService.open(CodeComparisonDialogComponent, {
      width: '95vw',
      height: '90vh',
      modal: true,
      draggable: false,
      resizable: false,
      styleClass: 'code-comparison-dialog',
    });
  }
}
