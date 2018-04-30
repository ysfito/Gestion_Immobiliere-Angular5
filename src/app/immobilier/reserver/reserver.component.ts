import { Component, OnInit, Input } from '@angular/core';
import {FormControl, Validators, FormGroup} from '@angular/forms';
import { Bien } from '../interface/bien';
import { ActivatedRoute } from '@angular/router';
import { BienService } from '../service/bien.service';
import { HttpClient } from '@angular/common/http';




@Component({
  selector: 'app-reserver',
  templateUrl: './reserver.component.html',
  styleUrls: ['./reserver.component.css']
})
export class ReserverComponent implements OnInit {




  constructor(private route: ActivatedRoute, private ServiceBien: BienService) { }


  id: number;
  private sub: any;

  Bien: Bien[];


  ngOnInit() {

   /* const sub = this.route.params.subscribe(params => {

      this.id = +params['id'];
       const id= +this.Rout.snapshot.paramMap.get("id");
    }); */


    const sub = this.route.params.subscribe(params => {

      this.id = +params['id'];
      console.log(this.id);
    });

      this.ServiceBien.getBienbyID(this.id).subscribe(data => {this.Bien = data['data'] as Bien[];
      console.log(this.Bien);

    });
      console.log(this.id);
  }

}
