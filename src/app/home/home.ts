import { Component } from '@angular/core';
import { Hero } from './hero/hero';
import { CategoriesComponent } from './categories/categories';
import { Footer } from './footer/footer';
import { NewsBlog } from './news-blog/news-blog';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Hero,  CategoriesComponent,Footer,NewsBlog],
templateUrl: './home.html',
})
export class Home {}
