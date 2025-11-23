import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { Highlight } from 'ngx-highlightjs';
import { DynamicDialogConfig, DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Button } from 'primeng/button';
import { Tab, TabList, TabPanel, TabPanels, Tabs } from 'primeng/tabs';

@Component({
  selector: 'app-resource-code-dialog',
  templateUrl: './resource-code-dialog.component.html',
  styleUrl: './resource-code-dialog.component.scss',
  imports: [Highlight, Button, Tabs, TabList, Tab, TabPanels, TabPanel],
  providers: [DialogService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResourceCodeDialogComponent {
  config = inject(DynamicDialogConfig);
  private ref = inject(DynamicDialogRef);

  close(): void {
    this.ref.close();
  }
}
