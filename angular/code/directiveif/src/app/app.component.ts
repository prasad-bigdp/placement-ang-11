import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  isDance = false;
  isGood = false;
  isModal = false;
  fun() {
    if (this.isDance) {
      this.isDance=false
    }
    else {
      this.isDance=true
    }
  }
  showModal() {
    this.isModal=true
  }
  stopModal() {
     this.isModal = false;
  }

}
