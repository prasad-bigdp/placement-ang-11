import { Component } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  pro: any = [];
  constructor(public ds: DataService) {}
  ngOnInit(): void {
    this.ds.getData().subscribe((d: any) => {
      this.pro = d.products;
    });
  }
  addCart(item: any) {
    this.ds.add(item);
  }
}
