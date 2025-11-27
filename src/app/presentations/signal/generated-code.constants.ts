// Ce fichier est généré automatiquement par scripts/generate-code-constants.mjs
// Ne pas modifier manuellement !

/**
 * Code TypeScript de la démo httpResource
 * Source: src/app/presentations/signal/demo/contacts-resource-demo.component.ts
 */
export const contactsResourceDemoComponentTs = `import { Component, ChangeDetectionStrategy, signal, inject } from '@angular/core';
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
`;

/**
 * Template HTML de la démo httpResource
 * Source: src/app/presentations/signal/demo/contacts-resource-demo.component.html
 */
export const contactsResourceDemoComponentHtml = `<div class="demo-container">
  <div class="demo-header">
    <div class="header-content">
      <h2>🎯 Démonstration httpResource</h2>
      <p class="subtitle">Chargement de contacts avec l'API httpResource</p>
    </div>
    <p-button
      icon="pi pi-code"
      label="Voir le code"
      [outlined]="true"
      severity="secondary"
      (onClick)="showCode()"
    />
  </div>

  <div class="demo-controls">
    <div class="search-box">
      <input
        pInputText
        type="text"
        placeholder="Rechercher un contact..."
        [(ngModel)]="searchQuery"
      />
      @if (searchQuery()) {
        <p-button
          icon="pi pi-times"
          [text]="true"
          [rounded]="true"
          severity="secondary"
          (onClick)="clearSearch()"
        />
      }
    </div>

    <p-button
      icon="pi pi-refresh"
      label="Recharger"
      [outlined]="true"
      (onClick)="refresh()"
      [loading]="contactsResource.isLoading()"
    />
  </div>

  <div class="status-info">
    @if (contactsResource.isLoading()) {
      <div class="status-badge loading">
        <i class="pi pi-spin pi-spinner"></i>
        Chargement en cours...
      </div>
    } @else if (contactsResource.error()) {
      <div class="status-badge error">
        <i class="pi pi-exclamation-triangle"></i>
        Erreur: {{ contactsResource.error() }}
      </div>
    } @else if (contactsResource.hasValue()) {
      <div class="status-badge success">
        <i class="pi pi-check-circle"></i>
        {{ filteredContacts.length }} contact(s) trouvé(s)
      </div>
    }
  </div>

  <div class="contacts-grid">
    @if (contactsResource.hasValue()) {
      @for (contact of filteredContacts; track contact.id) {
        <p-card>
          <div class="contact-card">
            <div class="contact-header">
              <div class="contact-avatar">
                {{ contact.firstName.charAt(0) }}{{ contact.lastName.charAt(0) }}
              </div>
              <div class="contact-name">
                <h3>{{ contact.firstName }} {{ contact.lastName }}</h3>
                <span class="contact-position">{{ contact.position }}</span>
              </div>
            </div>
            <div class="contact-details">
              <div class="detail-item">
                <i class="pi pi-building"></i>
                <span>{{ contact.company }}</span>
              </div>
              <div class="detail-item">
                <i class="pi pi-envelope"></i>
                <span>{{ contact.email }}</span>
              </div>
              <div class="detail-item">
                <i class="pi pi-phone"></i>
                <span>{{ contact.phone }}</span>
              </div>
            </div>
          </div>
        </p-card>
      } @empty {
        <div class="empty-state">
          <i class="pi pi-search"></i>
          <p>Aucun contact trouvé</p>
        </div>
      }
    }
  </div>
</div>
`;

/**
 * Styles SCSS de la démo httpResource
 * Source: src/app/presentations/signal/demo/contacts-resource-demo.component.scss
 */
export const contactsResourceDemoComponentScss = `.demo-container {
  padding: 2rem;
  max-width: 1400px;
  margin: 0 auto;
}

.demo-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  gap: 1rem;

  .header-content {
    flex: 1;

    h2 {
      font-size: 2rem;
      font-weight: 700;
      color: #1e293b;
      margin: 0 0 0.5rem 0;
    }

    .subtitle {
      font-size: 1rem;
      color: #64748b;
      margin: 0;
    }
  }
}

.demo-controls {
  display: flex;
  gap: 1rem;
  align-items: center;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;

  .search-box {
    flex: 1;
    min-width: 300px;
    display: flex;
    gap: 0.5rem;
    align-items: center;

    input {
      flex: 1;
    }
  }
}

.status-info {
  margin-bottom: 1.5rem;
}

.status-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  border-radius: 8px;
  font-weight: 500;
  font-size: 0.95rem;

  &.loading {
    background: #eff6ff;
    color: #1e40af;
    border: 1px solid #3b82f6;
  }

  &.error {
    background: #fef2f2;
    color: #991b1b;
    border: 1px solid #ef4444;
  }

  &.success {
    background: #f0fdf4;
    color: #166534;
    border: 1px solid #22c55e;
  }

  i {
    font-size: 1.1rem;
  }
}

.contacts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 1.5rem;
}

.contact-card {
  .contact-header {
    display: flex;
    gap: 1rem;
    align-items: center;
    margin-bottom: 1rem;

    .contact-avatar {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 700;
      font-size: 1.1rem;
      flex-shrink: 0;
    }

    .contact-name {
      h3 {
        margin: 0;
        font-size: 1.1rem;
        font-weight: 600;
        color: #1e293b;
      }

      .contact-position {
        font-size: 0.875rem;
        color: #64748b;
      }
    }
  }

  .contact-details {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    .detail-item {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      font-size: 0.9rem;
      color: #475569;

      i {
        color: #94a3b8;
        font-size: 1rem;
        width: 20px;
        text-align: center;
      }

      span {
        word-break: break-word;
      }
    }
  }
}

.empty-state {
  grid-column: 1 / -1;
  text-align: center;
  padding: 4rem 2rem;
  color: #94a3b8;

  i {
    font-size: 4rem;
    margin-bottom: 1rem;
    opacity: 0.5;
  }

  p {
    font-size: 1.1rem;
    margin: 0;
  }
}
`;

/**
 * Données JSON des contacts
 * Source: public/contacts.json
 */
export const contactsJson = `[
  {
    "id": 1,
    "firstName": "Sarah",
    "lastName": "Croche",
    "email": "sarah.croche@example.fr",
    "phone": "+33 6 12 34 56 78",
    "company": "Boulangerie Moderne",
    "position": "Directrice"
  },
  {
    "id": 2,
    "firstName": "Guy",
    "lastName": "Li",
    "email": "guy.li@example.fr",
    "phone": "+33 6 23 45 67 89",
    "company": "Tech Innovations",
    "position": "Développeur Senior"
  },
  {
    "id": 3,
    "firstName": "Alain",
    "lastName": "Térieur",
    "email": "alain.terieur@example.fr",
    "phone": "+33 6 34 56 78 90",
    "company": "Déco Intérieure",
    "position": "Architecte d'intérieur"
  },
  {
    "id": 4,
    "firstName": "Alex",
    "lastName": "Térieur",
    "email": "alex.terieur@example.fr",
    "phone": "+33 6 45 67 89 01",
    "company": "Jardins & Paysages",
    "position": "Paysagiste"
  },
  {
    "id": 5,
    "firstName": "Jean",
    "lastName": "Bon",
    "email": "jean.bon@example.fr",
    "phone": "+33 6 56 78 90 12",
    "company": "Charcuterie Artisanale",
    "position": "Maître Charcutier"
  },
  {
    "id": 6,
    "firstName": "Laurent",
    "lastName": "Dur",
    "email": "laurent.dur@example.fr",
    "phone": "+33 6 67 89 01 23",
    "company": "Eau Minérale SA",
    "position": "Chef de Projet"
  },
  {
    "id": 7,
    "firstName": "Vincent",
    "lastName": "Time",
    "email": "vincent.time@example.fr",
    "phone": "+33 6 78 90 12 34",
    "company": "Argent Facile",
    "position": "Banquier"
  },
  {
    "id": 8,
    "firstName": "Anne",
    "lastName": "Hédoniste",
    "email": "anne.hedoniste@example.fr",
    "phone": "+33 6 89 01 23 45",
    "company": "Plaisirs Gourmands",
    "position": "Chef Pâtissière"
  },
  {
    "id": 9,
    "firstName": "Paul",
    "lastName": "Emploi",
    "email": "paul.emploi@example.fr",
    "phone": "+33 6 90 12 34 56",
    "company": "Agence Pôle",
    "position": "Conseiller"
  },
  {
    "id": 10,
    "firstName": "Laure",
    "lastName": "Antie",
    "email": "laure.antie@example.fr",
    "phone": "+33 6 01 23 45 67",
    "company": "Radio Classique",
    "position": "Présentatrice"
  },
  {
    "id": 11,
    "firstName": "Marc",
    "lastName": "Assin",
    "email": "marc.assin@example.fr",
    "phone": "+33 6 12 34 56 89",
    "company": "Commerce Import-Export",
    "position": "Négociant"
  },
  {
    "id": 12,
    "firstName": "Sacha",
    "lastName": "Touille",
    "email": "sacha.touille@example.fr",
    "phone": "+33 6 23 45 67 90",
    "company": "Chatouilles & Cie",
    "position": "Animateur"
  },
  {
    "id": 13,
    "firstName": "Otto",
    "lastName": "Graf",
    "email": "otto.graf@example.fr",
    "phone": "+33 6 34 56 78 01",
    "company": "Signatures Prestigieuses",
    "position": "Calligraphe"
  },
  {
    "id": 14,
    "firstName": "Ella",
    "lastName": "Adécidé",
    "email": "ella.adecide@example.fr",
    "phone": "+33 6 45 67 89 12",
    "company": "Solutions Express",
    "position": "Manager"
  },
  {
    "id": 15,
    "firstName": "Rick",
    "lastName": "O'Shea",
    "email": "rick.oshea@example.fr",
    "phone": "+33 6 56 78 90 23",
    "company": "Billard Club",
    "position": "Champion"
  }
]
`;

