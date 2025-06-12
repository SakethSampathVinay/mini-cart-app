import { NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StockHighlightDirective } from '../../directives/stock-highlight.directive';

@Component({
  selector: 'app-product-card',
  imports: [FormsModule, NgIf, StockHighlightDirective],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {
  @Input() product: any;
  @Output() addToCart = new EventEmitter<any>();

  showFullDescription: boolean = false;

  handleAddToCart() {
    this.addToCart.emit(this.product);
  }

  toggleDescription() {
    this.showFullDescription = !this.showFullDescription;
  }
}
