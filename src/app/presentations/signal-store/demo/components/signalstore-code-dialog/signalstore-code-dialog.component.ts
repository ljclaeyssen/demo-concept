import {Component, ChangeDetectionStrategy, inject} from '@angular/core';
import {Highlight} from 'ngx-highlightjs';
import {DynamicDialogConfig, DialogService, DynamicDialogRef} from 'primeng/dynamicdialog';
import {ButtonModule} from 'primeng/button';
import {Tab, TabList, TabPanel, TabPanels, Tabs} from 'primeng/tabs';

@Component({
  selector: 'app-signalstore-code-dialog',
  templateUrl: './signalstore-code-dialog.component.html',
  styleUrl: './signalstore-code-dialog.component.scss',
  imports: [Highlight, ButtonModule, Tabs, TabList, Tab, TabPanels, TabPanel],
  providers: [DialogService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignalstoreCodeDialogComponent {
  config = inject(DynamicDialogConfig);
  private ref = inject(DynamicDialogRef);

  close() {
    this.ref.close();
  }
}
