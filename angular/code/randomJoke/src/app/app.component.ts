import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  myJoke: any='';
  constructor(public a: ApiService) {
    console.log(this.a.joke)
    this.myJoke= this.a.joke
  }
  fun() {
    this.a.getJoke()
     this.myJoke = this.a.joke;
  }
}
