import { Component,Input,OnChanges,OnInit,DoCheck, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-book',
  standalone: false,
  templateUrl: './book.component.html',
  styleUrl: './book.component.css',
})
export class BookComponent implements OnInit,OnChanges,DoCheck {
  constructor() {
    console.log("constructor called")
  }
  ngOnInit(): void {
    console.log("ng onInIt is called")
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("ng onchanged got called")
  }
  ngDoCheck(): void {
    console.log("do check is called")
  }
  @Input() title = '';
  @Input() author = '';
  @Input() imageUrl = '';
  @Input() c=0;
}
