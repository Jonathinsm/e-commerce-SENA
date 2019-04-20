import { Component, OnInit } from '@angular/core';
import { OrderService } from '../shared/order.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styles: [],
  providers:[UserService]
})
export class OrdersComponent implements OnInit {
  orderList;
  title;
  token;

  constructor(private service: OrderService,
    private router: Router,
    private toastr: ToastrService,
    private userService: UserService
    ) {
      this.title = "Historyal de Pedidos";
      this.token = this.userService.getToken()
    }

  ngOnInit() {
    //this.refreshList();
    this.service.getOrderList(this.token).subscribe(res => this.orderList = res);
  }
  /*
  refreshList() {
    this.service.getOrderList().then(res => this.orderList = res);
  }

  openForEdit(orderID: number) {
    this.router.navigate(['/pedido/editar/' + orderID]);
  }*/

}
