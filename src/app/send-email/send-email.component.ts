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
        console.log(response);
  
        // Ajoutez une vérification pour le type de réponse
        if (response instanceof HttpResponse) {
          console.log('Response is an instance of HttpResponse');
          // Manipulez la réponse de votre backend ici
        } else {
          console.log('Response is not an instance of HttpResponse. Likely a non-JSON response.');
          console.log(response); // Vous pouvez inspecter la réponse complète ici
        }
      },
      error => {
        console.error(error);
        // Gérez les erreurs ici
      }
    );
  }
  
}


