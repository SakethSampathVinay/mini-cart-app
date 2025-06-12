import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { StockHighlightDirective } from '../../directives/stock-highlight.directive';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, NgIf, NgFor, StockHighlightDirective],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  @Input() cartItems: any[] = [];
}
