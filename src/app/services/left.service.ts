import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Left } from '../models/left.model';

@Injectable({
  providedIn: 'root'
})
export class LeftService {
  baseURL='http://localhost:43001/api/Left';
constructor(private _http: HttpClient) { }


getLeft():Observable<Left>{
return this._http.get<any>(this.baseURL+'/getLeft');
}
}
