// entreprise.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EntrepriseService {
  private apiUrl = 'http://localhost:1001/api/entreprises';

  constructor(private http: HttpClient) {}

  saveEntreprise(entrepriseData: any): Observable<any> {
    return this.http.post(this.apiUrl, entrepriseData);
  }
}
