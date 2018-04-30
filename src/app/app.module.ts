import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatToolbarModule, MatOptionModule, MatSelectModule} from '@angular/material';
import { ImmobilierComponent } from './immobilier/immobilier.component';
import { NavComponent } from './immobilier/nav/nav.component';
import { RechercheComponent } from './immobilier/recherche/recherche.component';
import { CatalogueComponent } from './immobilier/catalogue/catalogue.component';
import { TypeBienService } from './immobilier/service/type-bien.service';
import { HttpClientModule } from '@angular/common/http';
import { LocaliteService } from './immobilier/service/localite.service';
import { BienService } from './immobilier/service/bien.service';
import { AppRoutingModule } from './/app-routing.module';
import { ReserverComponent } from './immobilier/reserver/reserver.component';
import { MatIconModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InscriptionComponent } from './immobilier/inscription/inscription.component';
import { ConnexionComponent } from './immobilier/connexion/connexion.component';
import { MatTabsModule } from '@angular/material';
import { MatDialogModule } from '@angular/material';
import {NgxPaginationModule} from 'ngx-pagination';
import { AdminComponent } from './admin/admin.component';
import { PushNotificationModule } from 'ng-push-notification';

@NgModule({
  declarations: [
    AppComponent,
    ImmobilierComponent,
    NavComponent,
    RechercheComponent,
    CatalogueComponent,
    ReserverComponent,
    InscriptionComponent,
    ConnexionComponent,
    AdminComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatOptionModule,
    MatSelectModule,
    HttpClientModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatDialogModule,
    MatTabsModule,
    NgxPaginationModule,
    PushNotificationModule.forRoot(/* Default settings here, interface PushNotificationSettings */),
  ],
  entryComponents: [
    ConnexionComponent,
    InscriptionComponent
  ],
  providers: [TypeBienService, LocaliteService, BienService],
  bootstrap: [AppComponent]
})
export class AppModule { }
