import { CustomerService } from './../../shared/customer.service';
import { OrderService } from './../../shared/order.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { OrderItemsComponent } from '../order-items/order-items.component';
import { Customer } from '../../shared/customer.model';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styles: []
})
export class OrderComponent implements OnInit {
  customerList: Customer[];
  isValid: boolean = true;
  user: User;
  token;
  title;

  constructor(private service: OrderService,
    private dialog: MatDialog,
    private customerService: CustomerService,
    private userService: UserService,
    private toastr: ToastrService,
    private router: Router,
    private currentRoute: ActivatedRoute) {
      this.title = "Abastecimiento de Productos";
      this.user = this.userService.getIdentity();
      this.token = this.userService.getToken();
    }

  ngOnInit() {
    this.resetForm();
    this.customerService.getCustomerList(this.token).subscribe(res => this.customerList = res as Customer[]);
  }

  resetForm(form?: NgForm) {
    if (form = null)
      form.resetForm();
    this.service.formData = {
      comId: Math.floor(100000 + Math.random()* 900000).toString(),
      comTotal: 0,
      provId: "",
      usuId: this.user.usuId
    };
    this.service.orderItems = [];
  }

  //Enviar parametros al modal de pedidos
  AddOrEditOrderItem(orderItemIndex, OrderID) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = "50%";
    dialogConfig.data = { orderItemIndex, OrderID };
    this.dialog.open(OrderItemsComponent, dialogConfig).afterClosed().subscribe(res=>{
      this.updateGrandTotal();
    })
  }

  //Eliminar un item de la lista de pedidos
  onDeleteOrderItem(orderItemID: number, i: number) {
    this.service.orderItems.splice(i,1);
    this.updateGrandTotal();
  }

  //Actualizar el total de la compra
  updateGrandTotal() {
    this.service.formData.comTotal = this.service.orderItems.reduce((prev, curr) => {
      return prev + curr.detcomTotal;
    }, 0);
    this.service.formData.comTotal = parseFloat(this.service.formData.comTotal.toFixed(2));
  }

  validateForm() {
    this.isValid = true;
    if (this.service.formData.provId == "0")
      this.isValid = false;
    else if (this.service.orderItems.length == 0)
      this.isValid = false;
    return this.isValid;
  }


  onSubmit(form: NgForm) {
    if (this.validateForm()) {
      this.service.saveOrUpdateOrder(this.token).subscribe(res => {
        this.resetForm();
        this.toastr.success('Creado Exitosamente', 'Pedidos Alpha');
        this.router.navigate(['/pedidos']);
      })
    }
  }

}
