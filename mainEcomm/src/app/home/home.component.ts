import { Component,OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  pro: any = [];
  isReadonly = true;
  max = 5;
  rate = 4;
  constructor(public ds:DataService) {
    
  }
  ngOnInit(): void {
    this.ds.getData().subscribe((d:any) => {
      this.pro = d.products;
    })
  }
  
  
}
