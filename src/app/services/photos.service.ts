import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Photos } from '../models/Photos';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  baseURL='/api/Left';
constructor(private _http: HttpClient) { }


getPhotos():Observable<Photos>{
  debugger;
return this._http.get<any>(this.baseURL+'/getPhotos');
}

}
