import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RootObject } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {
url = 'http://localhost:3000';
pagePost = 0;

constructor(private http: HttpClient) { }

  getImages(){
    this.pagePost ++;

   return this.http.get<RootObject>(`${this.url}/images?page=${this.pagePost}`);
  }
}
