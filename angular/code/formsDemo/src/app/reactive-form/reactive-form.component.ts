import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  standalone: false,
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {
 
  nameControl = new FormControl();
  emailControl = new FormControl();
  pwdControl = new FormControl();
  submitLogic() {
    console.log(this.nameControl)
  }
}
