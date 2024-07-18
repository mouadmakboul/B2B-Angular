import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';

import { SigninComponent } from './signin/signin.component';
import { ContratComponent } from './contrat/contrat.component';
import { EntrepriseComponent } from './entreprise/entreprise.component';
import { AllEntrepriseComponent } from './all-entreprise/all-entreprise.component';
import { SendEmailComponent } from './send-email/send-email.component';
import { AuthorComponent } from './author/author.component';
import { ProduitsComponent } from './produits/produits.component';
import { CardInformationsComponent } from './card-informations/card-informations.component';
import { ActivatecontratComponent } from './activatecontrat/activatecontrat.component';
import { AttachcontratComponent } from './attachcontrat/attachcontrat.component';
import { CategoryupComponent } from './categoryup/categoryup.component';
import { CheckinputsComponent } from './checkinputs/checkinputs.component';
import { Product1Component } from './product1/product1.component';
import { LastcomponentComponent } from './lastcomponent/lastcomponent.component';







const routes: Routes = [
  { path: 'acceuil', component: AcceuilComponent },
  { path: 'cardInformations', component: CardInformationsComponent },
  { path: 'entreprises', component: EntrepriseComponent },
  { path: 'allentreprises', component: AllEntrepriseComponent },
  { path: 'email', component: SendEmailComponent },
  { path: 'author', component: AuthorComponent },
  { path: 'activecontrat', component: ActivatecontratComponent },
  { path: 'attach', component: AttachcontratComponent },
  { path: 'category', component: CategoryupComponent },
  { path: 'check', component: CheckinputsComponent },
  { path: 'product', component: ProduitsComponent },
  { path: 'product1', component: Product1Component },
  { path: 'product2', component: LastcomponentComponent },
  
 
  
  
  { path: 'signin', component: SigninComponent },
  { path: 'contrat', component: ContratComponent },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
