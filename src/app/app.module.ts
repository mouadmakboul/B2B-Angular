import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcceuilComponent } from './acceuil/acceuil.component';

import { SigninComponent } from './signin/signin.component';

import { EntreprisesComponent } from './entreprises/entreprises.component';
import { ProductsComponent } from './products/products.component';
import { ClothesComponent } from './clothes/clothes.component';



@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
   
    SigninComponent,
      
        EntreprisesComponent,
               ProductsComponent,
               ClothesComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
