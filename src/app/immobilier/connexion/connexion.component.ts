import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { BienService } from '../service/bien.service';
import { ActivatedRoute } from '@angular/router';
import { Client } from '../interface/client';




@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  hide = true;
  id: number;
  private sub: any;
  client: Client[];

  email = new FormControl('',  Validators.email);




  constructor(private route: ActivatedRoute, private ServiceBien: BienService) { }

  ngOnInit() {

    const sub = this.route.params.subscribe(params => {

      this.id = +params['id'];
      console.log(this.id);
    });
  }


onSubmit(donnee) {
  this.client = donnee as Client[];
  console.log(this.client);
  this.ServiceBien.addReservationByConnect(this.id, this.client).subscribe(res => {
    console.log(res);

  });

  }

}
