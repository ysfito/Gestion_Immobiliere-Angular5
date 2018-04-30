import { TypeBien } from '../interface/type-bien';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class TypeBienService {

  constructor(private http: HttpClient) { }

  getTypeBien(): Observable<TypeBien[]> {

    return this.http.get<TypeBien[]>('http://127.0.0.1:8000/api/showTypeBien');

  }
}
