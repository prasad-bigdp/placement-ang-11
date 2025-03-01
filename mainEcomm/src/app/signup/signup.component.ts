import { Component } from '@angular/core';
import { createUserWithEmailAndPassword } from '@angular/fire/auth';
import { getAuth } from '@angular/fire/auth';
import { firebaseConfig } from '../../../environments';
import { initializeApp } from 'firebase/app';
@Component({
  selector: 'app-signup',
  standalone: false,
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  em = ''; pwd = '';
  app= initializeApp(firebaseConfig)
  addToFireBase() {
    createUserWithEmailAndPassword(getAuth(this.app),this.em, this.pwd)
      .then((res) => { console.log(res); alert("user added succesfully") })
    .catch((err)=>console.log(err))
  }
}
