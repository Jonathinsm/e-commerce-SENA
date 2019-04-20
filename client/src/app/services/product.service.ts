import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { environment } from 'src/environments/environment';

@Injectable()
export class ProductService{
    public identity;
    public token;

    constructor(public _http: HttpClient){}

    register(product: Product,token): Observable<any>{
        let params = JSON.stringify(product);
        let headers = new HttpHeaders()
            .set('Content-Type','application/json')
            .set('Authorization', token);
        return this._http.post(environment.apiURL+'product', params, {headers:headers});
    }

    getAtributes(token): Observable<any>{
        let headers = new HttpHeaders()
            .set('Content-Type','application/json')
            .set('Authorization', token);
        return this._http.get(environment.apiURL+'producatributes', {headers:headers});
    }

    getProducts(token): Observable<any>{
        let headers = new HttpHeaders()
            .set('Content-Type','application/json')
            .set('Authorization', token);
        return this._http.get(environment.apiURL+'product', {headers:headers});
    }

}