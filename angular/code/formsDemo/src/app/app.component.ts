import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'formsDemo';
  formLogic(e: any,a:any) {
    e.preventDefault()
    console.log(a, a.errors['required']);
  }
}
