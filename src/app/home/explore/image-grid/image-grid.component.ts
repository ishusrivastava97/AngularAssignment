import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-grid',
  standalone: true,
  imports: [],
  templateUrl: './image-grid.component.html',
  styleUrl: './image-grid.component.css',
})
export class ImageGridComponent {
  @Input() cardsData!: any[];
  onBuyNow(){
    console.log(this.cardsData);
    
  }
}
