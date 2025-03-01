import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  count = 0
  constructor(private ds: DataService) {
   this.ds.cartCountSub.subscribe((d)=>this.count=d)
  }
}
