import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class SellService{
    public identity;
    public token;

    constructor(public _http: HttpClient){}

    registerBill(venta,token): Observable<any>{
        let params = JSON.stringify(venta);
        let headers = new HttpHeaders()
            .set('Content-Type','application/json')
            .set('Authorization', token)
        return this._http.post(environment.apiURL+'sells', params, {headers:headers});
    }

    GetBills(token): Observable<any>{
        let headers = new HttpHeaders()
            .set('Content-Type','application/json')
            .set('Authorization', token);
        return this._http.get(environment.apiURL+'sells', {headers:headers});
    }
}