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
  printthisPage() {
    const originalForm = document.getElementById('contratForm') as HTMLFormElement;
    const clonedForm = originalForm.cloneNode(true) as HTMLFormElement;

    // Copier les valeurs des champs de saisie du formulaire original au formulaire cloné
    const originalInputs = originalForm.querySelectorAll('input');
    const clonedInputs = clonedForm.querySelectorAll('input');

    for (let i = 0; i < originalInputs.length; i++) {
      (clonedInputs[i] as HTMLInputElement).value = (originalInputs[i] as HTMLInputElement).value;
    }

    const newWindow = window.open('', '', 'width=800,height=600');

    if (newWindow) {
      newWindow.document.write(`
        <html>
          <head>
            <title>Print Contract</title>
            <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css">
            <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css">
            <style>
              @media print {
                .no-print {
                  display: none;
                }
              }
            </style>
          </head>
          <body>
            ${clonedForm.outerHTML}
            <script>
              window.onload = function() {
                window.print();
                window.close();
              }
            </script>
          </body>
        </html>
      `);
      newWindow.document.close();
    }
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
