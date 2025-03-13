import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms'; 
import { SearchService } from './search.service';

@Component({
  selector: 'app-navigation-bar',
  standalone: true,
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css'],
  imports: [FormsModule],
})
export class NavigationBarComponent {
  searchQuery: string = '';

  constructor(private router: Router, private searchService: SearchService) {}

  onSearchChange() {
    if (this.searchQuery.trim()) {
      this.router.navigate(['/all-products']);
    }
  }
  updateSearchQuery(): void {
    this.searchService.updateSearchQuery(this.searchQuery);
  }
  goToCart() {
    this.router.navigate(['/view-cart']);
  }

  goToRegister() {
    this.router.navigate(['/login']);
  }

  goToHome() {
    this.router.navigate(['/']);
  }
}