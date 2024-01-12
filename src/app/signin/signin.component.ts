
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { Component, AfterViewInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { ViewportScroller } from '@angular/common';

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
    private viewportScroller: ViewportScroller, 
    private el: ElementRef,
    
     
    private authService: AuthService
  ) {}
  redirectToSection() {
    this.router.navigate(['/contrat']).then(() => {
      const targetElement = this.el.nativeElement;

      // Activer le défilement fluide
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'end' });
    });
  }
  

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
