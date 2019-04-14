import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GLOBAL } from './global';
import { Product } from '../models/product';

@Injectable()
export class ProductService{
    public url:string;
    public identity;
    public token;

    constructor(public _http: HttpClient){
        this.url = GLOBAL.url;
    }

    register(product: Product): Observable<any>{
        let params = JSON.stringify(product);
        let headers = new HttpHeaders().set('Content-Type','application/json');
        return this._http.post(this.url+'product', params, {headers:headers});
    }

    getAtributes(): Observable<any>{
        let headers = new HttpHeaders().set('Content-Type','application/json');
        return this._http.get(this.url+'producatributes', {headers:headers});
    }

    getProducts(token): Observable<any>{
        let headers = new HttpHeaders()
            .set('Content-Type','application/json')
            .set('Authorization', token);;
        return this._http.get(this.url+'product', {headers:headers});
    }

}