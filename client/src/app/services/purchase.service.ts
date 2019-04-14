import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GLOBAL } from './global';
import { Purchase } from '../models/purchase';
import { Detpurchase } from '../models/detpurchase';
 
@Injectable()
export class PurchaseService{
    public url:string;
    public identity;
    public token;

    constructor(public _http: HttpClient){
        this.url = GLOBAL.url;
    }

    register(purchase:Purchase): Observable<any>{
        let params = JSON.stringify(purchase);
        let headers = new HttpHeaders().set('Content-Type','application/json');
        return this._http.post(this.url+'product', params, {headers:headers});
    }

    getAtributes(): Observable<any>{
        let headers = new HttpHeaders().set('Content-Type','application/json');
        return this._http.get(this.url+'purchaseattributes', {headers:headers});
    }

    getProducts(token): Observable<any>{
        let headers = new HttpHeaders()
            .set('Content-Type','application/json')
            .set('Authorization', token);;
        return this._http.get(this.url+'product', {headers:headers});
    }

}