import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  registrationError: string | null = null;
  username: string = '';
  success: boolean = false;
  password: string = '';
  constructor(
    private router: Router,
    
     
    private authService: AuthService
  ) {}

  // Exemple dans le composant TypeScript
register() {
  const signinData = {
    username: this.username,
    password: this.password
  };

  this.authService.signin(signinData).subscribe(
    (response) => {
      // La connexion a réussi, mettez à jour la variable success
      this.success = true;
    },
    (error) => {
      // La connexion a échoué, affichez la notification appropriée
      
      // Affichez l'alerte ou le message d'erreur comme souhaité
      this.registrationError = "Erreur lors de la connexion. Veuillez vérifier vos informations.";
    }
  );
}

}
