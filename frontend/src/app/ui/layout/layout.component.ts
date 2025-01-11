import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="layout">
      <aside class="sidebar" [class.collapsed]="sidebarCollapsed">
        <div class="sidebar-header">
          <img src="assets/logo.png" alt="Logo" class="logo" />
          <button class="collapse-btn" (click)="toggleSidebar()">
            <i class="fas fa-chevron-left"></i>
          </button>
        </div>
        <nav class="sidebar-nav">
          <ng-content select="[sidebar]"></ng-content>
        </nav>
      </aside>
      <main class="main-content">
        <header class="header">
          <ng-content select="[header]"></ng-content>
        </header>
        <div class="content">
          <ng-content></ng-content>
        </div>
      </main>
    </div>
  `,
  styles: [
    `
      .layout {
        display: flex;
        height: 100vh;
      }

      .sidebar {
        width: 250px;
        background-color: var(--background-secondary);
        border-right: 1px solid #eee;
        transition: width 0.3s ease;
        display: flex;
        flex-direction: column;
      }

      .sidebar.collapsed {
        width: 60px;
      }

      .sidebar-header {
        padding: 1rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid #eee;
      }

      .logo {
        height: 30px;
        width: auto;
      }

      .collapse-btn {
        background: none;
        border: none;
        cursor: pointer;
        color: var(--text-color);
        padding: 0.5rem;
        border-radius: 4px;
        transition: background-color 0.3s ease;
      }

      .collapse-btn:hover {
        background-color: rgba(0, 0, 0, 0.05);
      }

      .sidebar-nav {
        padding: 1rem;
        flex: 1;
        overflow-y: auto;
      }

      .main-content {
        flex: 1;
        display: flex;
        flex-direction: column;
        overflow: hidden;
      }

      .header {
        height: 60px;
        border-bottom: 1px solid #eee;
        padding: 0 1rem;
        display: flex;
        align-items: center;
        background-color: white;
      }

      .content {
        flex: 1;
        padding: 1rem;
        overflow-y: auto;
        background-color: var(--background-primary);
      }
    `,
  ],
})
export class LayoutComponent {
  @Input() sidebarCollapsed = false;

  toggleSidebar() {
    this.sidebarCollapsed = !this.sidebarCollapsed;
  }
}
