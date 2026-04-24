import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="bg-[#1B2A4A] border-t border-[rgba(91,155,213,0.15)] mt-auto">
      <div class="max-w-[1400px] mx-auto px-8 py-4 flex items-center justify-between">
        <span class="text-[12px] text-[#8FA8D0]">
          &copy; {{ year }} Distribuidora Andina S.A.C. — Sistema de Gestión de Inventario
        </span>
        <span class="text-[11px] text-[#5B9BD5] uppercase tracking-wider font-medium">v1.0</span>
      </div>
    </footer>
  `
})
export class FooterComponent {
  year = new Date().getFullYear();
}
