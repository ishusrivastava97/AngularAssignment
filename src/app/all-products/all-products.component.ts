import { Component, ElementRef, ViewChild } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { ApiDataService } from '../api-data.service';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DisplayCardsComponent } from "./display-cards/display-cards.component";
import { SearchService } from '../navigation-bar/search.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-all-products',
  standalone: true,
  imports: [FooterComponent, ReactiveFormsModule, DisplayCardsComponent],
  templateUrl: './all-products.component.html',
  styleUrl: './all-products.component.css',
})
export class AllProductsComponent {
  products: any;

  constructor(
    private apiService: ApiDataService,
    private searchService: SearchService,
    private router: Router
  ) {}
  filteredProducts: any;

  ngOnInit(): void {
    this.apiService.getProducts().subscribe((data: any) => {
      this.products = data;
      this.filteredProducts = this.products;
      this.searchService.getSearchQueryObservable().subscribe((searchQuery) => {
        this.filteredProducts = this.products.filter((product: any) => {
          return (
            product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.category.toLowerCase().includes(searchQuery.toLowerCase())
          );
        });
      });
    });
  }

  public categories: string = '';
  filterProducts(category: string) {
    this.categories = category;
    this.filteredProducts = this.products;
    this.filteredProducts = this.products.filter(
      (product: any) => product.category === this.categories
    );
  }
  goToProductDetails(productId: number) {
    this.router.navigate(['/all-products', productId]);
  }
  clearFilters() {
    this.categories = '';
    this.filteredProducts = this.products;
  }

 
}
