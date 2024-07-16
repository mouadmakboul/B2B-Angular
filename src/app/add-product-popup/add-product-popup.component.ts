import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-product-popup',
  templateUrl: './add-product-popup.component.html',
  styleUrls: ['./add-product-popup.component.css']
})
export class AddProductPopupComponent {
  isVisible = false;
  selectedFile: File | null = null;

  @Output() productAdded = new EventEmitter<any>();

  openPopup() {
    this.isVisible = true;
  }

  closePopup() {
    this.isVisible = false;
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  onSubmit() {
    if (this.selectedFile) {
      const reader = new FileReader();
      reader.onload = () => {
        const product = {
          name: (<HTMLInputElement>document.querySelector('input[name="name"]')).value,
          description: (<HTMLTextAreaElement>document.querySelector('textarea[name="description"]')).value,
          price: (<HTMLInputElement>document.querySelector('input[name="price"]')).value,
          image: reader.result // Here you can handle the image data
        };
        this.productAdded.emit(product);
        this.closePopup();
      };
      reader.readAsDataURL(this.selectedFile);
    } else {
      const product = {
        name: (<HTMLInputElement>document.querySelector('input[name="name"]')).value,
        description: (<HTMLTextAreaElement>document.querySelector('textarea[name="description"]')).value,
        price: (<HTMLInputElement>document.querySelector('input[name="price"]')).value,
        image: null
      };
      this.productAdded.emit(product);
      this.closePopup();
    }
  }
}
