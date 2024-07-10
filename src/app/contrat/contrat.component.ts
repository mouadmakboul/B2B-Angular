import { Component } from '@angular/core';
import { ContratService } from '../contrat.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contrat',
  templateUrl: './contrat.component.html',
  styleUrls: ['./contrat.component.css']
})
export class ContratComponent {
  contrat: any = {};
  contratCreeAvecSucces: boolean = false;
  imageUrl: string | ArrayBuffer | null = null;

  constructor(
    private contratService: ContratService,
    private router: Router  // Injectez le service Router
  ) {}
  printthisPage(){
    window.print();
  }

  onSubmit(): void {
    this.contratService.createContrat(this.contrat).subscribe(
      (response) => {
        this.contratCreeAvecSucces = true;

        // Effectuez la redirection vers "/entreprises" après la création du contrat
       // this.router.navigateByUrl('/entreprises');
      },
      (error) => {
        alert('Erreur lors de la création du contrat');
      }
    );
  }
  onFileSelected(event: any) {
    const file: File = event.target.files[0]; // Récupérer le fichier sélectionné

    // Vérifier si un fichier a été sélectionné
    if (file) {
      const reader = new FileReader(); // Créer un objet FileReader

      // Définir ce qui se passe lorsque la lecture est terminée
      reader.onload = () => {
        this.imageUrl = reader.result as string; // Mettre à jour l'URL de l'image
      };

      // Lire le contenu du fichier comme une URL de données
      reader.readAsDataURL(file);
    }
  }
  
}
