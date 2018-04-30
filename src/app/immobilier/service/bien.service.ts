import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Bien } from '../interface/bien';
import { HttpHeaders } from '@angular/common/http';




@Injectable()
export class BienService {



  constructor(private http: HttpClient) { }

  private url = 'http://127.0.0.1:8000/api/';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };


  getCatalogue(): Observable<Bien[]> {

    return this.http.get<Bien[]>( this.url + 'showCatalogue');
  }

  getBienbyID(id: number): Observable<Bien[]> {

    return this.http.get<Bien[]>( this.url + 'RechercheById/' + `${id}`);
  }

  addReservation(id, client): Observable<any[]> {

    return this.http.post<any[]>(this.url + 'Reserver/Inscription' + `/${id}` , JSON.parse(JSON.stringify(client)), this.httpOptions);

  }


  addReservationByConnect(id, client): Observable<any[]> {

    return this.http.post<any[]>(this.url + 'Reserver/Connexion' + `/${id}` , JSON.parse(JSON.stringify(client)), this.httpOptions);

  }

}
