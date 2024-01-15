// entreprise.service.ts

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Entreprise } from './Models/entreprise.model';
import { catchError } from 'rxjs';

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
  getEntreprises(): Observable<any> {
    return this.http.get(this.apiUrl)
      .pipe(
        catchError((error) => {
          console.error('Erreur de récupération des entreprises:', error);
          throw error;
        })
      );
  }
  deleteEntreprise(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
   // entreprise.service.ts
updateEntreprise(entreprise: Entreprise): Observable<Entreprise> {
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  return this.http.put<Entreprise>(`${this.apiUrl}/${entreprise.id}`, entreprise, httpOptions);
}

  
 // entreprise.service.ts



}
