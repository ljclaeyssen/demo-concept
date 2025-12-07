import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { SyntaxSwitchComponent } from '../../components/syntax-switch.component';

@Component({
  selector: 'app-async-pipe-slide',
  templateUrl: './async-pipe.slide.html',
  styleUrl: './async-pipe.slide.scss',
  imports: [SyntaxSwitchComponent],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AsyncPipeSlide {
  oldTemplateCode = signal(`<!-- Template avec *ngIf et *ngFor -->
<div *ngIf="users$ | async as users">
  <div *ngFor="let user of users">
    {{ user.name }}
  </div>
</div>

<!-- Combiné avec loading -->
<ng-container *ngIf="loading$ | async; else content">
  <p>Chargement...</p>
</ng-container>
<ng-template #content>
  <div *ngFor="let item of items$ | async">
    {{ item.name }}
  </div>
</ng-template>`);

  newTemplateCode = signal(`<!-- Template avec @if et @for -->
@if (users$ | async; as users) {
  @for (user of users; track user.id) {
    <div>{{ user.name }}</div>
  }
}

<!-- Combiné avec loading -->
@if (loading$ | async) {
  <p>Chargement...</p>
} @else {
  @for (item of items$ | async; track item.id) {
    <div>{{ item.name }}</div>
  }
}`);

  oldComponentCode = signal(`import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule],
  template: \`
    <div *ngIf="users$ | async as users">
      <div *ngFor="let user of users">
        {{ user.name }}
      </div>
    </div>
  \`
})
export class UserListComponent {
  users$ = this.userService.getUsers();

  constructor(private userService: UserService) {}
  // Pas de ngOnDestroy ! async pipe gère tout ✨
}`);

  newComponentCode = signal(`import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-user-list',
  imports: [AsyncPipe],
  template: \`
    @if (users$ | async; as users) {
      @for (user of users; track user.id) {
        <div>{{ user.name }}</div>
      }
    }
  \`
})
export class UserListComponent {
  private userService = inject(UserService);
  users$ = this.userService.getUsers();
  // Pas de ngOnDestroy ! async pipe gère tout ✨
}`);
}
