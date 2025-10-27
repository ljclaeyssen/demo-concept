import {Component, ChangeDetectionStrategy, inject} from '@angular/core';
import {JsonPipe} from '@angular/common';
import {DynamicDialogConfig, DialogService, DynamicDialogRef} from 'primeng/dynamicdialog';
import {ButtonModule} from 'primeng/button';

@Component({
  selector: 'app-submission-result-dialog',
  templateUrl: './submission-result-dialog.component.html',
  styleUrl: './submission-result-dialog.component.scss',
  imports: [JsonPipe, ButtonModule],
  providers: [DialogService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubmissionResultDialogComponent {
  config = inject(DynamicDialogConfig);
  private ref = inject(DynamicDialogRef);

  close() {
    this.ref.close();
  }
}
