import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';

import { SigninComponent } from './signin/signin.component';
import { ContratComponent } from './contrat/contrat.component';
import { EntrepriseComponent } from './entreprise/entreprise.component';
import { ClientsComponent } from './clients/clients.component';





const routes: Routes = [
  { path: 'acceuil', component: AcceuilComponent },
  { path: 'entreprises', component: EntrepriseComponent },
  { path: 'clients', component: ClientsComponent },
 
  
  
  { path: 'signin', component: SigninComponent },
  { path: 'contrat', component: ContratComponent },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
