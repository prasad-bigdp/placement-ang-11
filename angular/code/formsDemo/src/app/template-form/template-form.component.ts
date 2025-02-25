import { Component } from '@angular/core';

@Component({
  selector: 'app-template-form',
  standalone: false,
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.css',
})
export class TemplateFormComponent {
  constructor() {
    console.log("constructor got called")
  }
  formLogic(e: any, a: any) {
    e.preventDefault();
    console.log(a, a.errors['required']);
  }
}
