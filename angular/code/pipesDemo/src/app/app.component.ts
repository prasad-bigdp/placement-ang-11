import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  // title = 'pipesDemo';
  // isLight = false;
  // fun() {
  //   if (this.isLight) {
  //     this.isLight=false
  //   }
  //   else {
  //     this.isLight=true
  //   }
  // }


  name: string = "PRasad"
  price = 40;
   dt= new Date()
  obj = {
    name: "raj",
    age:25
  }
  title="Pawan kalyan"
  value = 24






}
