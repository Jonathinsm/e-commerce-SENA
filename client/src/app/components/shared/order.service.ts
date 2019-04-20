import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Order } from './order.model';
import { OrderItem } from './order-item.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  formData: Order;
  orderItems: OrderItem[];
  token;

  constructor(private http: HttpClient) { }
  

  saveOrUpdateOrder(token): Observable<any>{
    var body = {
      ...this.formData,
      OrderItems: this.orderItems
    };
    let headers = new HttpHeaders()
      .set('Content-Type','application/json')
      .set('Authorization', token);
    return this.http.post(environment.apiURL + '/purchases', body, {headers:headers});
  }

  getOrderList(token): Observable<any>{
    let headers = new HttpHeaders()
      .set('Content-Type','application/json')
      .set('Authorization', token);
    return this.http.get(environment.apiURL + '/purchases',{headers:headers})
  }

  /*
  getOrderByID(id:number):any {
    return this.http.get(environment.apiURL + '/Order/'+id).toPromise();
  }

  deleteOrder(id:number) {
    return this.http.delete(environment.apiURL + '/Order/'+id).toPromise();
  }
  */

}
