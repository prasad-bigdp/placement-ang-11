import { Component,OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  cartItems: any = [];
  total=0
  constructor(private ds:DataService ) {
    this.ds.cartSubject.subscribe((i) => this.cartItems = i);
  }
  ngOnInit(): void {
    this.total = this.cartItems.reduce((prev:any,curr:any)=>prev+curr.price,0)
  }
}
