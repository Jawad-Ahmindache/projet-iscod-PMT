import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AlertComponent } from '../../ui/alert/alert.component';
import { ButtonComponent } from '../../ui/button/button.component';
import { InputComponent } from '../../ui/input/input.component';

@Component({
  selector: 'app-designkit',
  standalone: true,
  imports: [CommonModule, ButtonComponent, InputComponent, AlertComponent],
  template: `
    <div class="container mx-auto p-8">
      <h1 class="text-3xl font-bold mb-8">Design Kit</h1>

      <!-- Boutons -->
      <section class="mb-8">
        <h2 class="text-xl font-semibold mb-4">Boutons</h2>
        <div class="flex flex-wrap gap-4">
          <div>
            <h3 class="text-lg mb-2">Variantes</h3>
            <div class="flex gap-2">
              <app-button>Primary</app-button>
              <app-button variant="secondary">Secondary</app-button>
              <app-button variant="outline">Outline</app-button>
            </div>
          </div>

          <div>
            <h3 class="text-lg mb-2">États</h3>
            <div class="flex gap-2">
              <app-button [isLoading]="true">Loading</app-button>
              <app-button [isDisabled]="true">Disabled</app-button>
            </div>
          </div>

          <div>
            <h3 class="text-lg mb-2">Tailles</h3>
            <div class="flex gap-2 items-center">
              <app-button size="sm">Small</app-button>
              <app-button size="md">Medium</app-button>
              <app-button size="lg">Large</app-button>
            </div>
          </div>
        </div>
      </section>

      <!-- Champs de formulaire -->
      <section class="mb-8">
        <h2 class="text-xl font-semibold mb-4">Champs de formulaire</h2>
        <div class="grid grid-cols-2 gap-4 max-w-xl">
          <app-input
            label="Champ texte"
            placeholder="Entrez du texte"
            [hasError]="false"
          />
          <app-input
            label="Champ avec erreur"
            placeholder="Erreur"
            [hasError]="true"
            errorMessage="Ce champ est requis"
          />
          <app-input
            type="password"
            label="Mot de passe"
            placeholder="Entrez votre mot de passe"
            [hasError]="false"
          />
          <app-input
            label="Champ désactivé"
            placeholder="Désactivé"
            [isDisabled]="true"
            [hasError]="false"
          />
        </div>
      </section>

      <!-- Alertes -->
      <section class="mb-8">
        <h2 class="text-xl font-semibold mb-4">Alertes</h2>
        <div class="space-y-4 max-w-xl">
          <app-alert type="success">
            Opération réussie avec succès !
          </app-alert>
          <app-alert type="error"> Une erreur est survenue. </app-alert>
          <app-alert type="warning"> Attention à cette action. </app-alert>
          <app-alert type="info"> Information importante. </app-alert>
        </div>
      </section>
    </div>
  `,
})
export class DesignKitComponent {}
