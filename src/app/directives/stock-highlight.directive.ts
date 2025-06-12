import { Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appStockHighlight]',
  standalone: true
})
export class StockHighlightDirective implements OnChanges {
  @Input('appStockHighlight') stock: number = 0;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (this.stock > 20) {
      this.setColor('green');
    } else if (this.stock >= 10) {
      this.setColor('orange');
    } else {
      this.setColor('red');
    }
  }

  private setColor(color: string) {
    this.renderer.setStyle(this.el.nativeElement, 'color', color);
    this.renderer.setStyle(this.el.nativeElement, 'font-weight', 'bold');
  }
}
