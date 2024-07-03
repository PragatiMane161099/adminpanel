import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryListResponse } from './response.interface'; 
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private url = 'http://localhost:4000/category';

  constructor(private http: HttpClient) {}

  addCaregory(title: string, description:string){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'token': sessionStorage['token']
      })
    };
    const body = {
      title: title,
      description: description
    }
    return this.http.post<CategoryListResponse>(this.url, body, httpOptions);
  }

  getCategories(): Observable<CategoryListResponse> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'token': sessionStorage['token']
      })
    };
    return this.http.get<CategoryListResponse>(this.url, httpOptions);
  }
}
