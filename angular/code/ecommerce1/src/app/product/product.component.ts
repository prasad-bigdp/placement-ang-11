import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-product',
  standalone: false,
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input() title = '';
  @Input() price = '';
  @Input() desc = '';
  @Input() imageUrl = '';
  showDetail = false
  fun() {
    if (this.showDetail)
      this.showDetail = false
    else
      this.showDetail=true
  }
}
