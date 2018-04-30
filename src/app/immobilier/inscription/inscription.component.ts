import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, NgForm} from '@angular/forms';
import { Client } from '../interface/client';
import { BienService } from '../service/bien.service';
import { ActivatedRoute } from '@angular/router';
import { PushNotificationService } from 'ng-push-notification';


@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {



  hide = true;

  formInscription: NgForm;

client: Client[];
  email = new FormControl('', [Validators.required, Validators.email]);


  id: number;
  private sub: any;

  getErrorMessage() {
    return this.email.hasError('required') ? 'Veuillez Remplir ce Champ' :
        this.email.hasError('email') ? 'Attention email no valide' :
            '';
  }

  constructor(private route: ActivatedRoute, private ServiceBien: BienService,  private pushNotification: PushNotificationService) { }



  ngOnInit() {


    const sub = this.route.params.subscribe(params => {

      this.id = +params['id'];
      console.log(this.id);
    });

  }



onSubmit(form) {

  this.client = form;

console.log(this.client);

this.ServiceBien.addReservation(this.id, this.client).subscribe(res => {
  console.log(res);

});

if (this.formInscription.valid) {
  console.log('Form Submitted!');
  this.formInscription.reset();
}



}




}
