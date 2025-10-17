import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

interface Category {
  id: number;
  name: string;
  image?: string;
  productCount?: number;
}

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categories.html',
})
export class CategoriesComponent implements OnInit {
  categories: Category[] = [];
  startIndex = 0;
  visibleCount = 4;
  loading = true;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any>('db.json').subscribe({
      next: (data) => {
        const db = data;
        const products = db.products || [];

        this.categories = (db.categories || []).map((cat: any) => ({
          ...cat,
          image:
            products.find((p: any) => p.categoryId === cat.id)?.image ||
            'https://via.placeholder.com/300x200',
          productCount: products.filter((p: any) => p.categoryId === cat.id).length,
        }));

        this.loading = false;
      },
      error: (err) => {
        console.error('Error loading data:', err);
        this.loading = false;
      },
    });
  }

  next(): void {
    if (this.startIndex + this.visibleCount < this.categories.length) {
      this.startIndex++;
    }
  }

  prev(): void {
    if (this.startIndex > 0) {
      this.startIndex--;
    }
  }

  get visibleCategories(): Category[] {
    return [...this.categories.slice(this.startIndex, this.startIndex + this.visibleCount)];
  }

  trackById(index: number, item: Category): number {
    return item.id;
  }
}
