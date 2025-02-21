import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  products: any = [];
  filteredProducts: any = [];
  constructor(public hc: HttpClient) {
    this.hc
      .get('https://fakestoreapi.com/products')
      .subscribe((data) => {
        this.products = data;
        this.filteredProducts=this.products
       });
  }
  filterProducts(e: any) {
    this.filteredProducts = this.products;
    console.log(e.target.textContent);
    this.filteredProducts = this.products.filter(function (ele:any) {
      return ele.category == e.target.textContent;
    })
  }
}
