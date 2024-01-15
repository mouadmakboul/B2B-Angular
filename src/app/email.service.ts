import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private apiUrl = 'http://localhost:2000/api/mail/send/';

  constructor(private http: HttpClient) {}

  sendEmail(email: string, formData: any): Observable<any> {
    const emailApiUrl = this.apiUrl + email;
    return this.http.post(emailApiUrl, formData);
  }
}

