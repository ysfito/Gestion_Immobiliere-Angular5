import { BienService } from './service/bien.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Bien } from './interface/bien';

@Component({
  selector: 'app-immobilier',
  templateUrl: './immobilier.component.html',
  styleUrls: ['./immobilier.component.css']
})
export class ImmobilierComponent implements OnInit {

  Bien: Bien[];

  constructor( private ServiceduBien: BienService) { }

  ngOnInit() {

    this.ServiceduBien.getCatalogue().subscribe(data => {this.Bien = data['data'] as Bien[];

  console.log(this.Bien);
});
  }


}
