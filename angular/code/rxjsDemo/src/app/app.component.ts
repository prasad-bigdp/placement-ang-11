import { Component } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  x: any = ''; y: any;
  constructor() {
    this.y=new BehaviorSubject(0)
    this.x = of(1, 2, 3, 4, 5);
    this.x.subscribe({
      next: (data: any) => console.log(data),
      error: (err: any) => console.log(err),
      complete:(msg:any) =>console.log("completed")
    })
    this.y.next(1);
    this.y.next(2);
    this.y.next(3);
    this.y.next(4);
    this.y.next(5);
    this.y.subscribe((data:any)=>console.log("hi"+data))
  }

}



