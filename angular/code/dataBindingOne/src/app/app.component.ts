import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title: string = 'IRON MAN';
  imageurl: string =
    'https://ironusa.vtexassets.com/arquivos/ids/196906-800-1067?v=637913412188030000&width=800&height=1067&aspect=true';
  likes: number = 0;
  incrLike() {
    this.likes++;
  }
  decrLike() {
    this.likes--;
  }
  name:string=''
}
