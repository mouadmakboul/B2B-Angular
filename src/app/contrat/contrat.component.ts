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
  
}
