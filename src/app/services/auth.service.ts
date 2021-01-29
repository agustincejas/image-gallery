import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AUTH_PATH } from '../core/constants';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.generateToken();
  }
  
  generateToken(): Observable<any> {
    return this.http.post<any>(environment.apiUrl + AUTH_PATH, {'apiKey': environment.apiKey});
  }

  saveToken(token: string) {
    localStorage.setItem('token',token);
  }

  getToken(): string {
    const token = localStorage.getItem('token');
    return token? token : '';
  }
}
