import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { HttpClientModule } from '@angular/common/http'; // Assurez-vous d'importer ceci

import { SigninComponent } from './signin/signin.component';
import { ContratComponent } from './contrat/contrat.component';
import { EntrepriseComponent } from './entreprise/entreprise.component';
import { FormsModule } from '@angular/forms';

import { AllEntrepriseComponent } from './all-entreprise/all-entreprise.component';
import { SendEmailComponent } from './send-email/send-email.component';
import { AuthorComponent } from './author/author.component';
import { ProduitsComponent } from './produits/produits.component';
import { CardInformationsComponent } from './card-informations/card-informations.component';
import { ActivatecontratComponent } from './activatecontrat/activatecontrat.component';
import { AttachcontratComponent } from './attachcontrat/attachcontrat.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CategoryupComponent } from './categoryup/categoryup.component';
import { PrduitcardComponent } from './prduitcard/prduitcard.component';
import { CheckinputsComponent } from './checkinputs/checkinputs.component';
import { AddProductPopupComponent } from './add-product-popup/add-product-popup.component';
import { Product1Component } from './product1/product1.component';




@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    SigninComponent,
    ContratComponent,
    EntrepriseComponent,
    
    AllEntrepriseComponent,
         SendEmailComponent,
         AuthorComponent,
         ProduitsComponent,
         CardInformationsComponent,
         ActivatecontratComponent,
         AttachcontratComponent,
         CategoryupComponent,
         PrduitcardComponent,
         CheckinputsComponent,
         AddProductPopupComponent,
         Product1Component,
   
   
    
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
