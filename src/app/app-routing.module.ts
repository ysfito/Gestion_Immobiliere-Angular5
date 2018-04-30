import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReserverComponent } from './immobilier/reserver/reserver.component';
import { CatalogueComponent } from './immobilier/catalogue/catalogue.component';
import { ImmobilierComponent } from './immobilier/immobilier.component';
import { InscriptionComponent } from './immobilier/inscription/inscription.component';
import { ConnexionComponent } from './immobilier/connexion/connexion.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  { path: 'Reserver/:id', component: ReserverComponent },
  { path: 'Acceuil', component: ImmobilierComponent},
  { path: 'admin', component: AdminComponent},
  { path: '', redirectTo: 'Acceuil', pathMatch: 'full'},

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],

  exports: [ RouterModule ]

})
export class AppRoutingModule { }
