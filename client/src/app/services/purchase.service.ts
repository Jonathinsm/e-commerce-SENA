import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Purchase } from '../models/purchase';
import { environment } from 'src/environments/environment';
 
@Injectable()
export class PurchaseService{
    public identity;
    public token;

    constructor(public _http: HttpClient){
    }

    register(purchase:Purchase): Observable<any>{
        let params = JSON.stringify(purchase);
        let headers = new HttpHeaders().set('Content-Type','application/json');
        return this._http.post(environment.apiURL+'product', params, {headers:headers});
    }

    getAtributes(): Observable<any>{
        let headers = new HttpHeaders().set('Content-Type','application/json');
        return this._http.get(environment.apiURL+'purchaseattributes', {headers:headers});
    }

    getProducts(token): Observable<any>{
        let headers = new HttpHeaders()
            .set('Content-Type','application/json')
            .set('Authorization', token);;
        return this._http.get(environment.apiURL+'product', {headers:headers});
    }

}