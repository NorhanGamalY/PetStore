import { Component, OnInit, computed } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FavoritesService } from '../services/favorites';
import { AuthService } from '../services/auth/auth.service';
import { ClickOutsideDirective } from './click-outside.directive';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule, CommonModule, ClickOutsideDirective],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
})

export class Navbar implements OnInit {
  favoritesCount: number = 0;
  isDropdownOpen = false;

  isLoggedIn = computed(() => this.authService.user() !== null);
  currentUser = computed(() => this.authService.user());
  isAdmin = computed(() => {
    const user = this.authService.user();
    return user ? (user as any).role === 'admin' : false;
  });

  constructor(
    private favoritesService: FavoritesService,
    public authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.favoritesCount = this.favoritesService.getFavoritesCount();
    this.favoritesService.getFavoritesObservable().subscribe(favorites => {
      this.favoritesCount = favorites.length;
    });
  }

  getInitials(): string {
    const user = this.authService.user();
    if (!user) return '';
    
    const displayName = user.displayName || user.email || 'U';
    return displayName.charAt(0).toUpperCase();
  }

  getUserName(): string {
    const user = this.authService.user();
    return user?.displayName || 'User';
  }

  getUserEmail(): string {
    const user = this.authService.user();
    return user?.email || '';
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  closeDropdown() {
    this.isDropdownOpen = false;
  }

  async logout() {
    this.closeDropdown();
    const success = await this.authService.logout();
    if (success) {
      this.router.navigate(['/home']);
    }
  }
}