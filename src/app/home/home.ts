import { Component } from '@angular/core';
import { Hero } from './hero/hero';
import { CategoriesComponent } from './categories/categories';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Hero,  CategoriesComponent,Footer],
templateUrl: './home.html',
})
export class Home {}
