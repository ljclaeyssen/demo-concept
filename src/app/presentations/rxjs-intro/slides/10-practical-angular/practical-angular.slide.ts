import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { SyntaxSwitchComponent } from '../../components/syntax-switch.component';

@Component({
  selector: 'app-practical-angular-slide',
  templateUrl: './practical-angular.slide.html',
  styleUrl: './practical-angular.slide.scss',
  imports: [SyntaxSwitchComponent],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PracticalAngularSlide {
  oldServiceCode = signal(`import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {
  private currentUser$ = new BehaviorSubject<User | null>(null);

  constructor(private http: HttpClient) {}

  getCurrentUser(): Observable<User | null> {
    return this.currentUser$.asObservable();
  }

  login(credentials: LoginDto): Observable<User> {
    return this.http.post<User>('/api/login', credentials).pipe(
      tap(user => this.currentUser$.next(user))
    );
  }
}`);

  newServiceCode = signal(`import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class UserService {
  private http = inject(HttpClient);
  private currentUser$ = new BehaviorSubject<User | null>(null);

  getCurrentUser(): Observable<User | null> {
    return this.currentUser$.asObservable();
  }

  login(credentials: LoginDto): Observable<User> {
    return this.http.post<User>('/api/login', credentials).pipe(
      tap(user => this.currentUser$.next(user))
    );
  }
}`);

  oldComponentCode = signal(`import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-profile',
  template: \`
    <div *ngIf="user">
      <h1>{{ user.name }}</h1>
    </div>
  \`
})
export class UserProfileComponent implements OnInit, OnDestroy {
  user: User | null = null;
  private sub: Subscription;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.sub = this.userService.getCurrentUser()
      .subscribe(user => this.user = user);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}`);

  newComponentCode = signal(`import { Component, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-user-profile',
  template: \`
    @if (user) {
      <h1>{{ user.name }}</h1>
    }
  \`
})
export class UserProfileComponent {
  private userService = inject(UserService);
  user: User | null = null;

  constructor() {
    this.userService.getCurrentUser().pipe(
      takeUntilDestroyed()  // ✨ Auto-unsubscribe !
    ).subscribe(user => this.user = user);
  }
}`);
}
