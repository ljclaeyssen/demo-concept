import {Component, ChangeDetectionStrategy, inject} from '@angular/core';
import {DialogService, DynamicDialogRef} from 'primeng/dynamicdialog';
import {ButtonModule} from 'primeng/button';

@Component({
  selector: 'app-signalstore-flow-dialog',
  templateUrl: './signalstore-flow-dialog.component.html',
  styleUrl: './signalstore-flow-dialog.component.scss',
  imports: [ButtonModule],
  providers: [DialogService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignalstoreFlowDialogComponent {
  private ref = inject(DynamicDialogRef);

  close() {
    this.ref.close();
  }
}
