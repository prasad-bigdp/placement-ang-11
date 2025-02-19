import { Component } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-c1',
  standalone: false,
  templateUrl: './c1.component.html',
  styleUrl: './c1.component.css'
})
export class C1Component {
  count: number;
  constructor(public cs:CommonService) {
    this.count = cs.c;
  }
  fun() {
    this.cs.incr();
    this.count = this.cs.c;  }
}
