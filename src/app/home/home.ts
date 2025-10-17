import { Component } from '@angular/core';
import { Hero } from './hero/hero';
import { CategoriesComponent } from './categories/categories';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Hero,  CategoriesComponent],
templateUrl: './home.html',
})
export class Home {}
