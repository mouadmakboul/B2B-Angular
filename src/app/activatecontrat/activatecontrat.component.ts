import { Component } from '@angular/core';


@Component({
  selector: 'app-activatecontrat',
  templateUrl: './activatecontrat.component.html',
  styleUrls: ['./activatecontrat.component.css']
})
export class ActivatecontratComponent {
  showAlertFlag: boolean = false;
  showActivationAlertFlag: boolean = false;
  selectedCompany: string = '';
  

  onSubmit() {
    // Logique de soumission du formulaire si nécessaire
  }

  showAlert() {
    this.showAlertFlag = true;
  }

  closeAlert() {
    this.showAlertFlag = false;
  }

  showActivationAlert() {
    // Ici, vous pouvez personnaliser le message en fonction de la société sélectionnée
    const message = `L'affectation est faite de ce contrat à l'entreprise ${this.selectedCompany}.`;
    // Afficher l'alerte avec le message spécifique
    alert(message);
    // Vous pouvez également activer le drapeau showActivationAlertFlag si nécessaire
    this.showActivationAlertFlag = true;
  }
  

  closeActivationAlert() {
    this.showActivationAlertFlag = false;
  }
  

  selectClient(client: string) {
    this.selectedCompany = client;
    this.showActivationAlert();
  }
}
