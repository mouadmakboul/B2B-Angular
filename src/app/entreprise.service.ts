// entreprise.service.ts

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Entreprise } from './Models/entreprise.model';

@Injectable({
  providedIn: 'root'
})
export class EntrepriseService {
  private apiUrl = 'http://localhost:2000/api/entreprises';

  constructor(private http: HttpClient) {}

  createEntreprise(entreprise: Entreprise): Observable<Entreprise> {
    // Définir les en-têtes de la requête
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
        // Vous pouvez également ajouter d'autres en-têtes si nécessaire
      })
    };

    // Effectuer la requête POST avec les en-têtes spécifiés
    return this.http.post<Entreprise>(this.apiUrl, entreprise, httpOptions);
  }
}
