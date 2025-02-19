import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  c: number;
  constructor() { 
    this.c = 0;
  }
  incr()
  {
    this.c++;
    console.log(this.c)
  }
}
