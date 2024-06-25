import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SigninResponse } from './response.interface'; 

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private url = 'http://localhost:4000/admins'; 

  constructor(private http: HttpClient) {}

  signin(email: string, password: string): Observable<SigninResponse> {
    const body = { email, password };
    return this.http.post<SigninResponse>(`${this.url}/signin`, body);
  }
}
