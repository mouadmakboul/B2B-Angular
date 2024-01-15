import { Component } from '@angular/core';
import { EmailService } from '../email.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-send-email',
  templateUrl: './send-email.component.html',
  styleUrls: ['./send-email.component.css']
})
export class SendEmailComponent {
  formData: any = {
    subject: '',
    message: '',
    name: '',
    email: '',
    phone: ''
  }; 

  constructor(private emailService: EmailService) {}

  onSubmit() {
    
    const userEmail = this.formData.email;
  
    this.emailService.sendEmail(userEmail, this.formData).subscribe(
      response => {
        // Vérifiez si la réponse contient un message indiquant le succès
        if (response ) {
          alert('Message envoyé avec succès');
        } else {
          // Affichez une alerte générique en cas de réponse inattendue
          alert('Erreur inattendue. Veuillez réessayer.');
        }
      },
      error => {
        console.error(error);
        // Gérez les erreurs ici
      }
    );
    alert("message envoyé avec succés")
  }
  
  
  }
  



