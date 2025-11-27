import { Component, ChangeDetectionStrategy, signal, inject } from '@angular/core';
import { httpResource } from '@angular/common/http';
import { Button } from 'primeng/button';
import { Card } from 'primeng/card';
import { InputText } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ResourceCodeDialogComponent } from './components/resource-code-dialog.component';
import * as GeneratedCode from '../generated-code.constants';

export interface Contact {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  position: string;
}

@Component({
  selector: 'app-contacts-resource-demo',
  templateUrl: './contacts-resource-demo.component.html',
  styleUrl: './contacts-resource-demo.component.scss',
  imports: [Button, Card, InputText, FormsModule],
  providers: [DialogService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactsResourceDemoComponent {
  private dialogService = inject(DialogService);
  private ref: DynamicDialogRef | null = null;

  searchQuery = signal('');

  // httpResource fetching contacts from the JSON file
  contactsResource = httpResource<Contact[]>(() => 'contacts.json', {
    defaultValue: []
  });

  // Filtered contacts based on search query
  get filteredContacts(): Contact[] {
    const contacts = this.contactsResource.value();
    const query = this.searchQuery().toLowerCase().trim();

    if (!query) {
      return contacts;
    }

    return contacts.filter(contact =>
      contact.firstName.toLowerCase().includes(query) ||
      contact.lastName.toLowerCase().includes(query) ||
      contact.email.toLowerCase().includes(query) ||
      contact.company.toLowerCase().includes(query) ||
      contact.position.toLowerCase().includes(query)
    );
  }

  refresh(): void {
    this.contactsResource.reload();
  }

  clearSearch(): void {
    this.searchQuery.set('');
  }

  showCode(): void {
    this.ref = this.dialogService.open(ResourceCodeDialogComponent, {
      data: {
        componentTs: GeneratedCode.contactsResourceDemoComponentTs,
        componentHtml: GeneratedCode.contactsResourceDemoComponentHtml,
        componentScss: GeneratedCode.contactsResourceDemoComponentScss,
        contactsJson: GeneratedCode.contactsJson
      },
      width: '90vw',
      height: '90vh',
      modal: true,
      dismissableMask: true,
      styleClass: 'code-dialog'
    });
  }
}
