import { Component } from '@angular/core';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-product1',
  templateUrl: './product1.component.html',
  styleUrls: ['./product1.component.css']
})
export class Product1Component {
  formData: any = {
    subject: 'test',
    message: 'http://localhost:4200/product1',
    name: '',
    email: 'mouadmakboul8@gmail.com',
    phone: ''
  };
  isLoading = false; // State to manage loader visibility

  constructor(private emailService: EmailService) {}

  ontan() {
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
