import { Router } from '@angular/router';


import { ViewportScroller } from '@angular/common';
import {
  Component,
  AfterViewInit,
  OnDestroy,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css'],
})
export class AcceuilComponent {
  username: string = '';
  email: string = '';
  password: string = '';
  registrationError: string | null = null;

  @ViewChild('targetSection') targetSection!: ElementRef;
  private intervalId: any;

  constructor(
    private router: Router,
    private el: ElementRef,
    private viewportScroller: ViewportScroller,
     
    private authService: AuthService
  ) {}
  register() {
    // Réinitialiser l'erreur d'inscription
    this.registrationError = null;

    // Vérifier si les champs obligatoires ne sont pas vides
    if (!this.username || !this.email || !this.password) {
      this.registrationError = "Veuillez remplir tous les champs.";
      return;
    }

    this.authService.register(this.username, this.email, this.password).subscribe(
      (response) => {
        // La registration a réussi, redirigez vers la page de connexion
        this.router.navigate(['/signin']);
      },
      (error) => {
        // La registration a échoué, affichez l'erreur
        this.registrationError = "Erreur lors de l'inscription: " + error.message;
      }
    );
  }
  

  
}
