import { Component, OnInit } from '@angular/core';
import { ConnexionComponent } from '../connexion/connexion.component';
import { InscriptionComponent } from '../inscription/inscription.component';
import {MatDialog} from '@angular/material';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})

@Component({
  selector: 'app-connexion',
  templateUrl: '../connexion/connexion.component.html',
})

@Component({
  selector: 'app-inscription',
  templateUrl: '../inscription/inscription.component.html',
})


export class NavComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog() {
      const dialogRef = this.dialog.open(ConnexionComponent, {
        height: '90%',
        width: '150%'
      });

      dialogRef.afterClosed().subscribe(result => {
     console.log(`Dialog result: ${result}`);
   });

    }


    openDialo() {
      const dialogRef = this.dialog.open(InscriptionComponent, {
        height: '105%',

      });
}

}