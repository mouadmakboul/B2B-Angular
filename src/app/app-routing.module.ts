import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';

import { SigninComponent } from './signin/signin.component';
import { EntreprisesComponent } from './entreprises/entreprises.component';
import { ProductsComponent } from './products/products.component';
import { ClothesComponent } from './clothes/clothes.component';

const routes: Routes = [
  { path: 'acceuil', component: AcceuilComponent },
  
  { path: 'signin', component: SigninComponent },
  { path: 'clothes', component: ClothesComponent },

  { path: 'products', component: ProductsComponent },
  
  { path: 'entreprises', component: EntreprisesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
