import { Component } from '@angular/core';
import { ImageGridComponent } from './image-grid/image-grid.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-explore',
  imports: [ImageGridComponent],
  standalone: true,
  templateUrl: './explore.component.html',
  styleUrl: './explore.component.css',
})
export class ExploreComponent {
  private router:Router;
  constructor(router:Router) { this.router=router; }
  card1data = [
    {
      src1: 'https://jayant-ecommerce-angular.onrender.com/assets/lighting.jpg',
      title: 'lighting',
    },
    {
      src1: 'https://jayant-ecommerce-angular.onrender.com/assets/vases.jpg',
      title: 'Figurines, vases & more',
    },
    {
      src1: 'https://jayant-ecommerce-angular.onrender.com/assets/home%20storage.jpg',
      title: 'home storage',
    },
    {
      src1: 'https://jayant-ecommerce-angular.onrender.com/assets/bedsheets.jpg',
      title: 'Cushion covers, bedsheets & more',
    },
  ];
  card2data = [
    {
      src1: 'https://jayant-ecommerce-angular.onrender.com/assets/powerbanks.jpg',
      title: 'Powerbanks',
    },
    {
      src1: 'https://jayant-ecommerce-angular.onrender.com/assets/covers.jpg',
      title: 'Cases and covers',
    },
    {
      src1: 'https://jayant-ecommerce-angular.onrender.com/assets/cables.jpg',
      title: 'Cables and chargers',
    },
    {
      src1: 'https://jayant-ecommerce-angular.onrender.com/assets/neckband.jpg',
      title: 'Headsets',
    },
  ];
  card3data = [
    {
      src1: 'https://jayant-ecommerce-angular.onrender.com/assets/sports%20shoes.jpg',
      title: 'Sports shoes',
    },
    {
      src1: 'https://jayant-ecommerce-angular.onrender.com/assets/mens%20shoe.jpg',
      title: "'Men's shoes",
    },
    {
      src1: 'https://jayant-ecommerce-angular.onrender.com/assets/women%20shoe.jpg',
      title: "Wome's shoes",
    },
    {
      src1: 'https://jayant-ecommerce-angular.onrender.com/assets/handbags.jpg',
      title: 'Handbags',
    },
  ];
  card4data = [
    {
      src1: 'https://jayant-ecommerce-angular.onrender.com/assets/wiper.jpg',
      title: 'Spin mops, wipes & more',
    },
    {
      src1: 'https://jayant-ecommerce-angular.onrender.com/assets/bathroomHardware.jpg',
      title: 'Bathroom hardware & accessories',
    },
    {
      src1: 'https://jayant-ecommerce-angular.onrender.com/assets/hammer.jpg',
      title: 'Hammers, screwdrivers & more',
    },
    {
      src1: 'https://jayant-ecommerce-angular.onrender.com/assets/extension.jpg',
      title: 'Extension boards, plugs & more',
    },
  ];
  gotoallproducts() {
    this.router.navigate(['all-products']);
  }
}
