import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  token;

  constructor(private http:HttpClient) { }

  getItemList(token): Observable<any>{
    let headers = new HttpHeaders()
      .set('Content-Type','application/json')
      .set('Authorization', token);
   return this.http.get(environment.apiURL+'/productssingle', {headers:headers})
  }
  
}
