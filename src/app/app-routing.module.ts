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






const routes: Routes = [
  { path: 'acceuil', component: AcceuilComponent },
  { path: 'cardInformations', component: CardInformationsComponent },
  { path: 'entreprises', component: EntrepriseComponent },
  { path: 'allentreprises', component: AllEntrepriseComponent },
  { path: 'email', component: SendEmailComponent },
  { path: 'author', component: AuthorComponent },
  { path: 'activecontrat', component: ActivatecontratComponent },
  { path: 'attach', component: AttachcontratComponent },
 
  
  
  { path: 'signin', component: SigninComponent },
  { path: 'contrat', component: ContratComponent },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
