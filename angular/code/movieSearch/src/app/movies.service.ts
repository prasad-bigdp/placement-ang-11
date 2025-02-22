import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MoviesService {
 
  constructor(public hc:HttpClient) { }
  
  getMovies(n:string) {
    return this.hc.get(`https://www.omdbapi.com/?apikey=7bd91a6d&s=${n}`);
  }

}
