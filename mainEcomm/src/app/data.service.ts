import { Injectable } from '@angular/core';
import { API_URL } from '../../environments';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  arr: any = [];
  public cartSubject = new BehaviorSubject(this.arr);
  public cartCountSub = new BehaviorSubject(0);
  constructor(public hs: HttpClient) {}
  getData() {
    return this.hs.get(API_URL);
  }
  add(i: any) {
    const currCart = this.cartSubject.getValue()
    this.cartSubject.next([ ...currCart, i ]);
    const cartCount= this.cartCountSub.getValue()
    this.cartCountSub.next(cartCount + 1)
  }
  getCount() {
    return this.cartCountSub.getValue()
  }
  getItems() {
    return this.cartSubject.getValue()
  }
}
