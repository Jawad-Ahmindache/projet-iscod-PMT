import { Component } from '@angular/core';
import { AlertComponent } from '../../ui/alert/alert.component';
import { AvatarComponent } from '../../ui/avatar/avatar.component';
import { ButtonComponent } from '../../ui/button/button.component';
import { DropdownComponent } from '../../ui/dropdown/dropdown.component';
import { InputComponent } from '../../ui/input/input.component';
import { ModalComponent } from '../../ui/modal/modal.component';
import { SelectComponent } from '../../ui/select/select.component';

@Component({
  selector: 'app-designkit',
  standalone: true,
  imports: [
    ButtonComponent,
    InputComponent,
    SelectComponent,
    AvatarComponent,
    AlertComponent,
    DropdownComponent,
    ModalComponent,
  ],
  template: `
    <div class="container">
      <section>
        <h2 class="text-lg">Boutons</h2>
        <div class="component-group">
          <div class="flex flex-col gap-4">
            <h3 class="text-md">Variantes</h3>
            <div class="flex gap-2">
              <app-button>Primary</app-button>
              <app-button variant="secondary">Secondary</app-button>
              <app-button variant="outline">Outline</app-button>
              <app-button [disabled]="true">Disabled</app-button>
            </div>
          </div>
          <div class="flex flex-col gap-4">
            <h3 class="text-md">Tailles</h3>
            <div class="flex items-center gap-2">
              <app-button size="sm">Small</app-button>
              <app-button size="md">Medium</app-button>
              <app-button size="lg">Large</app-button>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 class="text-lg">Champs de formulaire</h2>
        <div class="component-group">
          <div class="flex flex-col gap-4">
            <h3 class="text-md">Variantes</h3>
            <div class="flex gap-4">
              <app-input label="Champ texte" placeholder="Entrez du texte" />
              <app-input
                label="Champ avec erreur"
                error="Ce champ est requis"
              />
              <app-input type="password" label="Mot de passe" />
              <app-input label="Champ désactivé" [disabled]="true" />
            </div>
          </div>
          <div class="flex flex-col gap-4">
            <h3 class="text-md">Tailles</h3>
            <div class="flex gap-4">
              <app-input size="sm" label="Small" placeholder="Petit champ" />
              <app-input size="md" label="Medium" placeholder="Champ moyen" />
              <app-input size="lg" label="Large" placeholder="Grand champ" />
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 class="text-lg">Select</h2>
        <div class="component-group">
          <div class="flex flex-col gap-4">
            <h3 class="text-md">Variantes</h3>
            <div class="flex gap-4">
              <app-select
                label="Sélection simple"
                [options]="[
                  { value: '1', label: 'Option 1' },
                  { value: '2', label: 'Option 2' },
                  { value: '3', label: 'Option 3' }
                ]"
              />
              <app-select
                label="Avec placeholder"
                placeholder="Choisissez une option"
                [options]="[
                  { value: '1', label: 'Option 1' },
                  { value: '2', label: 'Option 2' }
                ]"
              />
              <app-select
                label="Désactivé"
                [disabled]="true"
                [options]="[
                  { value: '1', label: 'Option 1' },
                  { value: '2', label: 'Option 2' }
                ]"
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 class="text-lg">Alertes</h2>
        <div class="component-group">
          <div class="flex flex-col gap-4">
            <app-alert type="success">Opération réussie avec succès!</app-alert>
            <app-alert type="error">Une erreur est survenue.</app-alert>
            <app-alert type="warning">Attention à cette action.</app-alert>
            <app-alert type="info">Information importante.</app-alert>
          </div>
        </div>
      </section>

      <section>
        <h2 class="text-lg">Dropdown</h2>
        <div class="component-group">
          <div class="flex flex-col gap-4">
            <app-dropdown
              label="Menu"
              [items]="[
                { value: '1', label: 'Option 1', icon: '👤' },
                { value: '2', label: 'Option 2', icon: '⚙️' },
                { value: '3', label: 'Option 3', icon: '📤' }
              ]"
              (selected)="onDropdownSelect($event)"
            />
          </div>
        </div>
      </section>

      <section>
        <h2 class="text-lg">Modal</h2>
        <div class="component-group">
          <div class="flex flex-col gap-4">
            <app-button (onClick)="showModal = true"
              >Ouvrir la modal</app-button
            >
            <app-modal
              title="Titre de la modal"
              [isOpen]="showModal"
              (closed)="showModal = false"
              (confirmed)="onModalConfirm()"
            >
              <p>Contenu de la modal...</p>
              <p>Vous pouvez mettre n'importe quel contenu ici.</p>
            </app-modal>
          </div>
        </div>
      </section>

      <section>
        <h2 class="text-lg">Avatar</h2>
        <div class="component-group">
          <div class="flex flex-col gap-4">
            <h3 class="text-md">Tailles</h3>
            <div class="flex items-center gap-4">
              <app-avatar name="John Doe" size="32px" />
              <app-avatar name="Jane Smith" size="48px" />
              <app-avatar name="Bob Wilson" size="64px" />
            </div>
          </div>
          <div class="flex flex-col gap-4">
            <h3 class="text-md">Avec image</h3>
            <div class="flex items-center gap-4">
              <app-avatar
                src="https://i.pravatar.cc/150?u=1"
                alt="User 1"
                name="John Doe"
                size="48px"
              />
              <app-avatar
                src="https://i.pravatar.cc/150?u=2"
                alt="User 2"
                name="Jane Smith"
                size="48px"
              />
              <app-avatar
                src="invalid-url"
                alt="Fallback"
                name="Bob Wilson"
                size="48px"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: [
    `
      .container {
        padding: var(--spacing-8);
        max-width: 1200px;
        margin: 0 auto;
        background-color: var(--fond-1);
      }

      section {
        margin-bottom: var(--spacing-8);
      }

      h2 {
        color: var(--text);
        margin-bottom: var(--spacing-4);
      }

      h3 {
        color: var(--text);
      }

      .component-group {
        display: flex;
        flex-direction: column;
        gap: var(--spacing-6);
        padding: var(--spacing-4);
        background: var(--fond-2);
        border-radius: var(--rounded-lg);
      }
    `,
  ],
})
export class DesignKitComponent {
  showModal = false;

  onDropdownSelect(item: any) {
    console.log('Selected:', item);
  }

  onModalConfirm() {
    this.showModal = false;
    console.log('Modal confirmed');
  }
}
