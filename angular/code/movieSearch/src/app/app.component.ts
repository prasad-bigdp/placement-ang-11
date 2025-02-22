import { Component } from '@angular/core';
import { MoviesService } from './movies.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'movieSearch';
  movieName: string = '';
  movies: any = [];
  constructor(public api: MoviesService) { }
  getData() {
    this.api.getMovies(this.movieName)
      .subscribe((data:any)=>this.movies=data.Search)
  }
}





