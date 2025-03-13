import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display-cards',
  standalone: true,
  imports: [],
  templateUrl: './display-cards.component.html',
  styleUrl: './display-cards.component.css',
})
export class DisplayCardsComponent {
  constructor(private router:Router){}
  @Input() apiData!: any;
  loger() {
    console.log(this.apiData);
  }

  
}
