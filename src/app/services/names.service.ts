import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Names } from '../models/Names';

@Injectable({
  providedIn: 'root'
})
export class NamesService {

  baseURL='/api/Left';
constructor(private _http: HttpClient) { }


getNames():Observable<Names>{
  debugger;
return this._http.get<any>(this.baseURL+'/getNames');
}
}
