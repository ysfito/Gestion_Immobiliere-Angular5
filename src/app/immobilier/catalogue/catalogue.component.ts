import { Bien } from '../interface/bien';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {

  constructor() { }

  @Input() bien: Bien;

  ngOnInit() {
  }

}
