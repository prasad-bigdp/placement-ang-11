import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
})
export class AppComponent {
  name = 'shinchan';
  imageUrl =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6ebxI3YHH2PKN2pl0qVph8uwex7A3Qd-HmQ&s';
  isDisabled = false;
  count = 0;
  fun() {
    this.count++;
  }
}
