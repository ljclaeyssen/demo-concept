import {Component, ChangeDetectionStrategy, inject} from '@angular/core';
import {DialogService, DynamicDialogRef} from 'primeng/dynamicdialog';
import {ButtonModule} from 'primeng/button';

@Component({
  selector: 'app-ngrx-flow-dialog',
  templateUrl: './ngrx-flow-dialog.component.html',
  styleUrl: './ngrx-flow-dialog.component.scss',
  imports: [ButtonModule],
  providers: [DialogService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgrxFlowDialogComponent {
  private ref = inject(DynamicDialogRef);

  close() {
    this.ref.close();
  }
}
