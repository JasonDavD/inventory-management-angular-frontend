import { Component, inject, signal, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  private auth = inject(AuthService);
  private router = inject(Router);

  menuAbierto = signal(false);

  get nombreCompleto() { return this.auth.getNombreCompleto(); }
  get rol() { return this.auth.getRol(); }
  get iniciales() {
    return this.nombreCompleto.split(' ').slice(0, 2).map(p => p[0]).join('').toUpperCase();
  }

  isAdmin() { return this.auth.isAdmin(); }

  toggleMenu(event: Event) {
    event.stopPropagation();
    this.menuAbierto.update(v => !v);
  }

  @HostListener('document:click')
  cerrarMenu() {
    this.menuAbierto.set(false);
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}
