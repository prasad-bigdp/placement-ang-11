import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-movie-card',
  standalone: false,
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.css'
})
export class MovieCardComponent {
  @Input() movieTitle = '';
  @Input() imageUrl=''
}
