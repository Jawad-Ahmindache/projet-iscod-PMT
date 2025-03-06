import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
    <div class="container mx-auto">
      <h1 class="text-2xl font-bold mb-4">Bienvenue sur PMT</h1>
      <p class="text-gray-600">Votre outil de gestion de projet préféré</p>
    </div>
  `,
})
export class HomeComponent {}
