import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-informations',
  templateUrl: './card-informations.component.html',
  styleUrls: ['./card-informations.component.css']
})
export class CardInformationsComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
    this.setupCardInputs();
  }

  setupCardInputs() {
    const inputCardNumber = document.getElementById("cardNumber") as HTMLInputElement;
    const imageCardNumber = document.getElementById("imageCardNumber");

    inputCardNumber.addEventListener("input", (event: Event) => {
      const target = event.target as HTMLInputElement;
      const input = target.value.replace(/\D/g, "");
      let formattedInput = "";
      for (let i = 0; i < input.length; i++) {
        if (i % 4 === 0 && i > 0) {
          formattedInput += " ";
        }
        formattedInput += input[i];
      }
      inputCardNumber.value = formattedInput;
      if (imageCardNumber) {
        imageCardNumber.innerHTML = formattedInput;
      }
    });

    const inputCCVNumber = document.getElementById("ccvNumber") as HTMLInputElement;
    const imageCCVNumber = document.getElementById("imageCCVNumber");

    inputCCVNumber.addEventListener("input", (event: Event) => {
      const target = event.target as HTMLInputElement;
      const input = target.value.replace(/\D/g, "");
      inputCCVNumber.value = input;
      if (imageCCVNumber) {
        imageCCVNumber.innerHTML = input;
      }
    });

    const expirationDate = document.getElementById("expDate") as HTMLInputElement;
    const imageExpDate = document.getElementById("imageExpDate");

    expirationDate.addEventListener("input", (event: Event) => {
      const target = event.target as HTMLInputElement;
      const input = target.value.replace(/\D/g, "");
      let formattedInput = "";
      for (let i = 0; i < input.length; i++) {
        if (i % 2 === 0 && i > 0) {
          formattedInput += "/";
        }
        formattedInput += input[i];
      }
      expirationDate.value = formattedInput;
      if (imageExpDate) {
        imageExpDate.innerHTML = formattedInput;
      }
    });

    const inputCardName = document.getElementById("cardName") as HTMLInputElement;
    const imageCardName = document.getElementById("imageCardName");

    inputCardName.addEventListener("input", (event: Event) => {
      const target = event.target as HTMLInputElement;
      if (imageCardName) {
        imageCardName.innerHTML = target.value;
      }
    });
  }
}
