import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContratService {
  private apiUrl = 'http://localhost:2000/api/contrats';

  constructor(private http: HttpClient) {}

  createContrat(contratData: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        // Ajoutez d'autres en-têtes personnalisés si nécessaire
      }),
    };

    return this.http.post<any>(this.apiUrl, contratData, httpOptions);
  }
}
