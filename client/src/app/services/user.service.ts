import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { environment } from 'src/environments/environment';

@Injectable()
export class UserService{
    public identity;
    public token;

    constructor(public _http: HttpClient){
    }

    register(user: User): Observable<any>{
        let params = JSON.stringify(user);
        let headers = new HttpHeaders().set('Content-Type','application/json');
        return this._http.post(environment.apiURL+'users', params, {headers:headers});
    }

    signup(user, gettoken = null): Observable<any>{
        if(gettoken != null){
            user.gettoken = gettoken;
        }
        let params = JSON.stringify(user);
        let headers = new HttpHeaders().set('Content-Type','application/json');
        return this._http.post(environment.apiURL+'users/login', params, {headers:headers});
    }

    getIdentity(){
        let identity = JSON.parse(localStorage.getItem('identity'));
        if(identity != 'undefined'){
            this.identity = identity;
      }else{
          this.identity = null;
      }
      return this.identity;
    }

    getToken(){
        let token  = localStorage.getItem('token');
        if(token != 'undefined'){
            this.token = token;
        }else{
            this.token  = null;
        }
        return this.token;
    }

    updateUser(user: User):Observable<any>{
        let params = JSON.stringify(user);
        let headers = new HttpHeaders()
            .set('Content-Type','application/json')
            .set('Authorization', this.getToken());
        return this._http.put(environment.apiURL+'users/'+user.usuId, params, {headers:headers});
    }

}