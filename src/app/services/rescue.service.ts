import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rescue } from '../models/Rescue';

@Injectable({
  providedIn: 'root'
})
export class RescueService {

  baseURL='/api/Left';
constructor(private _http: HttpClient) { }


getRescue():Observable<Rescue>{
return this._http.get<any>(this.baseURL+'/getRescue');
}

}
