import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Highlight } from 'ngx-highlightjs';

@Component({
  selector: 'app-syntax-switch',
  template: `
    <div class="syntax-switch-container">
      <div class="switch-header">
        <h2>{{ title }}</h2>
        <div class="switch-toggle">
          <button
            [class.active]="!showNew"
            (click)="showNew = false">
            Old
          </button>
          <button
            [class.active]="showNew"
            (click)="showNew = true">
            New
          </button>
        </div>
      </div>
      <pre><code [highlight]="showNew ? newCode : oldCode" [language]="language"></code></pre>
    </div>
  `,
  styles: [`
    .syntax-switch-container {
      width: 100%;
    }

    .switch-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 0.5rem;
    }

    .switch-header h2 {
      margin: 0;
      font-size: 1.1rem;
      color: #2d3748;
    }

    .switch-toggle {
      display: flex;
      gap: 0;
      border-radius: 6px;
      overflow: hidden;
      border: 1px solid #e2e8f0;
    }

    .switch-toggle button {
      padding: 0.35rem 0.75rem;
      font-size: 0.7rem;
      border: none;
      background: #f8fafc;
      color: #64748b;
      cursor: pointer;
      transition: all 0.2s ease;
      font-weight: 500;
    }

    .switch-toggle button:first-child {
      border-right: 1px solid #e2e8f0;
    }

    .switch-toggle button.active {
      background: #3b82f6;
      color: white;
    }

    .switch-toggle button:hover:not(.active) {
      background: #e2e8f0;
    }

    pre {
      margin: 0;
      background: #1e293b;
      border-radius: 8px;
      padding: 1rem;
      overflow-x: auto;
    }

    code {
      font-size: 0.75rem;
      line-height: 1.5;
    }
  `],
  imports: [Highlight],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SyntaxSwitchComponent {
  @Input() title = '';
  @Input() oldCode = '';
  @Input() newCode = '';
  @Input() language = 'typescript';

  showNew = true;
}
