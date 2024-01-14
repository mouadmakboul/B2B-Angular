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




@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    SigninComponent,
    ContratComponent,
    EntrepriseComponent,
    
    AllEntrepriseComponent,
   
   
    
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
