import {Component, ChangeDetectionStrategy, inject} from '@angular/core';
import {ButtonModule} from 'primeng/button';
import {DialogService, DynamicDialogRef} from 'primeng/dynamicdialog';
import {RegistrationDemoComponent} from '../../components/registration-demo/registration-demo.component';
import {CodeDialogComponent} from '../../components/code-dialog/code-dialog.component';

@Component({
  selector: 'app-live-demo-slide',
  templateUrl: './live-demo.slide.html',
  styleUrl: './live-demo.slide.scss',
  imports: [ButtonModule, RegistrationDemoComponent],
  providers: [DialogService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LiveDemoSlide {
  private dialogService = inject(DialogService);
  private ref: DynamicDialogRef | null = null;

  openCodeDialog() {
    this.ref = this.dialogService.open(CodeDialogComponent, {
      width: '90vw',
      height: '90vh',
      modal: true,
      draggable: false,
      resizable: false,
      styleClass: 'code-dialog',
    });
  }
}
