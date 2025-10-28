import {Component, ChangeDetectionStrategy, inject} from '@angular/core';
import {Highlight} from 'ngx-highlightjs';
import {DynamicDialogConfig, DialogService, DynamicDialogRef} from 'primeng/dynamicdialog';
import {ButtonModule} from 'primeng/button';
import {Tab, TabList, TabPanel, TabPanels, Tabs} from 'primeng/tabs';

@Component({
  selector: 'app-ngrx-code-dialog',
  templateUrl: './ngrx-code-dialog.component.html',
  styleUrl: './ngrx-code-dialog.component.scss',
  imports: [Highlight, ButtonModule, Tabs, TabList, Tab, TabPanels, TabPanel],
  providers: [DialogService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgrxCodeDialogComponent {
  config = inject(DynamicDialogConfig);
  private ref = inject(DynamicDialogRef);

  close() {
    this.ref.close();
  }
}
