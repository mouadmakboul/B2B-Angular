import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:1001/api/auth';

  constructor(private http: HttpClient) {}

  register(username: string, email: string, password: string): Observable<any> {
    const body = {
      username: username,
      email: email,
      password: password
    };

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        // Autres en-têtes nécessaires, par exemple, des jetons d'accès si requis
      })
    };

    return this.http.post(`${this.baseUrl}/signup`, body, httpOptions);
  }
  signin(signinData: { username: string, password: string }): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        // Autres en-têtes nécessaires, par exemple, des jetons d'accès si requis
      })
    };

    return this.http.post(`${this.baseUrl}/signin`, signinData, httpOptions);
  }

}
