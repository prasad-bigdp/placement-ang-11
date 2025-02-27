import { Injectable } from '@angular/core';
import { API_URL } from '../../environments';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public hs:HttpClient) { }

  getData() {
    return this.hs.get(API_URL)
  }
}
