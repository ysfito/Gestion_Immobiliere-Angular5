import { Component, OnInit } from '@angular/core';
import { TypeBienService } from '../service/type-bien.service';
import { TypeBien } from '../interface/type-bien';
import { Localite } from '../interface/localite';
import { LocaliteService } from '../service/localite.service';
import { NgForm, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Bien } from '../interface/bien';

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.css']
})
export class RechercheComponent implements OnInit {

TypeBien: TypeBien[];
Localite: Localite[];
bien: Bien[];

  constructor(private ServiceduTypeBien: TypeBienService, private ServiceLocalite: LocaliteService) { }

  ngOnInit() {

    this.ServiceduTypeBien.getTypeBien().subscribe(data => {this.TypeBien = data['data'] as TypeBien[];

    console.log(this.TypeBien);
  });


  this.ServiceLocalite.getLocalite().subscribe(data => {this.Localite = data['data'] as Localite[];

    console.log(this.Localite);
  });


  }

  onSubmit(donnees) {
    console.log(donnees);
  }

}
