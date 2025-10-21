import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Facebook, Instagram, Twitter } from 'lucide-angular';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './footer.html',
})
export class Footer {
  currentYear = new Date().getFullYear();
  icons = { Facebook, Instagram, Twitter };
}
