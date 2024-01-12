// contrat.component.ts

import { Component } from '@angular/core';
import { EntrepriseService } from '../entreprise.service';
import { Entreprise } from '../Models/entreprise.model';


@Component({
  selector: 'app-entreprise',
  templateUrl: './entreprise.component.html',
  styleUrls: ['./entreprise.component.css']
})
export class EntrepriseComponent {
  entreprise: Entreprise = {
    nom: '',
    adresse: '',
    tel: '',
    email: ''
  };

  constructor(private entrepriseService: EntrepriseService) {}

  onSubmit(): void {
    this.entrepriseService.createEntreprise(this.entreprise).subscribe(
      (response) => {
        // Réussite de la création, effectuez ici toutes les actions nécessaires (ex: redirection)
        alert('Entreprise créée avec succès', );
      },
      (error) => {
        // Erreur lors de la création
       alert('Erreur lors de la création de l\'entreprise', );
      }
    );
  }
}
