import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-avatar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      class="avatar"
      [style.background-color]="backgroundColor"
      *ngIf="!imageLoaded"
    >
      {{ initials }}
    </div>
    <img
      *ngIf="src"
      [src]="src"
      [alt]="alt"
      (load)="onImageLoad()"
      (error)="onImageError()"
      [class.hidden]="!imageLoaded"
    />
  `,
  styles: [
    `
      :host {
        display: inline-block;
      }

      .avatar {
        width: var(--size, 40px);
        height: var(--size, 40px);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-weight: 500;
        font-size: calc(var(--size, 40px) * 0.4);
      }

      img {
        width: var(--size, 40px);
        height: var(--size, 40px);
        border-radius: 50%;
        object-fit: cover;
      }

      .hidden {
        display: none;
      }
    `,
  ],
})
export class AvatarComponent implements OnInit {
  @Input() src?: string;
  @Input() alt = '';
  @Input() name = '';
  @Input() size?: string;

  imageLoaded = false;
  backgroundColor = '';
  initials = '';

  private colors = [
    '#2ecc71',
    '#3498db',
    '#9b59b6',
    '#e74c3c',
    '#f1c40f',
    '#1abc9c',
    '#34495e',
    '#e67e22',
    '#7f8c8d',
    '#16a085',
  ];

  ngOnInit() {
    if (this.size) {
      document.documentElement.style.setProperty('--size', this.size);
    }
    this.initials = this.getInitials(this.name);
    this.backgroundColor = this.getRandomColor(this.name);
  }

  private getInitials(name: string): string {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .substring(0, 2);
  }

  private getRandomColor(seed: string): string {
    const index = seed
      .split('')
      .reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return this.colors[index % this.colors.length];
  }

  onImageLoad() {
    this.imageLoaded = true;
  }

  onImageError() {
    this.imageLoaded = false;
  }
}
