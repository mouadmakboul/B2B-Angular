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
  isLoading = false; // State to manage loader visibility

  constructor(private emailService: EmailService) {}

  onSubmit() {
    this.isLoading = true; // Show loader

    const userEmail = this.formData.email;

    this.emailService.sendEmail(userEmail, this.formData).subscribe(
      response => {
        this.isLoading = false; // Hide loader

        if (response) {
          alert('Message envoyé avec succès');
        } else {
          alert('Erreur inattendue. Veuillez réessayer.');
        }
      },
      error => {
        this.isLoading = false; // Hide loader
        console.error(error);
      }
    );
  }
}
