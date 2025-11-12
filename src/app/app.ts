import {Component, OnInit, signal, WritableSignal} from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { Toast } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Toast],
  providers: [MessageService],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  isHome: WritableSignal<boolean> = signal(true);

  constructor(
    private router: Router,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event) => {
        const url = (event as NavigationEnd).urlAfterRedirects;
        this.isHome.set(url === '/');
        if (!this.isHome()) {
          this.messageService.add({
            severity: 'info',
            summary: 'Navigation',
            detail: 'Utilisez les flèches du clavier, cliquez sur les flèches latérales ou bien swipez !',
            life: 5000
          });
        }
      });
  }

  goHome() {
    this.router.navigateByUrl('/');
  }
}
