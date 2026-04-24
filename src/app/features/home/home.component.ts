import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, NavbarComponent, FooterComponent],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  private auth = inject(AuthService);

  get nombreCompleto() { return this.auth.getNombreCompleto(); }
  get rol() { return this.auth.getRol(); }
  isAdmin() { return this.auth.isAdmin(); }
}
