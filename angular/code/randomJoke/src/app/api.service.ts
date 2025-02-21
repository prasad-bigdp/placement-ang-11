import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  joke: any='';
  constructor(public hc: HttpClient) {
    this.hc.get('https://official-joke-api.appspot.com/random_joke')
      .subscribe((res) => {
        this.joke = res;
      })
  }
  getJoke() {
     this.hc
       .get('https://official-joke-api.appspot.com/random_joke')
       .subscribe((res) => {
         this.joke = res;
       });
  }
}
