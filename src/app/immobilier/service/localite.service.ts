import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Localite } from '../interface/localite';

@Injectable()
export class LocaliteService {

  constructor(private http: HttpClient) { }

  getLocalite(): Observable<Localite[]> {

    return this.http.get<Localite[]>('http://127.0.0.1:8000/api/showLocalite');

  }

}
