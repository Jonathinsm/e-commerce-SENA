import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  public token;

  constructor(private http : HttpClient) { }

  getCustomerList(token): Observable<any>{
    let headers = new HttpHeaders()
      .set('Content-Type','application/json')
      .set('Authorization', token);
    return this.http.get(environment.apiURL+'provider',{headers:headers})
   }
   
}
