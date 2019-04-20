import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { OrderItem } from '../../shared/order-item.model';
import { ItemService } from '../../shared/item.service';
import { Item } from '../../shared/item.model';
import { NgForm } from '@angular/forms';
import { OrderService } from '../../shared/order.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-order-items',
  templateUrl: './order-items.component.html',
  styles: [],
  providers: [UserService]
})
export class OrderItemsComponent implements OnInit {
  formData: OrderItem;
  itemList: Item[];
  isValid: boolean = true;
  token;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<OrderItemsComponent>,
    private itemService: ItemService,
    private orderSevice: OrderService,
    private userService: UserService
    ) {
      this.token = this.userService.getToken()
    }

  ngOnInit() {
    this.itemService.getItemList(this.token).subscribe(res => this.itemList = res as Item[]);
   if (this.data.orderItemIndex == null)
      this.formData = {
        detcomIdProducto: "",
        detcomIdCompra: this.data.OrderID,
        prodNombre: "",
        detcomIdCantidad: 0,
        detcomPrecio: 0,
        detcomTotal: 0
      }
    else
      this.formData = Object.assign({}, this.orderSevice.orderItems[this.data.orderItemIndex]);
      
  }

  updateName(ctrl) {
    if (ctrl.selectedIndex == 0) {
      this.formData.prodNombre = '';
    }
    else {
      this.formData.prodNombre = this.itemList[ctrl.selectedIndex - 1].prodNombre;
    }
    this.updateTotal();
  }
  

  updateTotal() {
    this.formData.detcomTotal = parseFloat((this.formData.detcomIdCantidad * this.formData.detcomPrecio).toFixed(2));
  }

  onSubmit(form: NgForm) {
    if (this.validateForm(form.value)) {
      if (this.data.orderItemIndex == null)
        this.orderSevice.orderItems.push(form.value);
      else
        this.orderSevice.orderItems[this.data.orderItemIndex] = form.value;
      this.dialogRef.close();
    }
  }

  validateForm(formData: OrderItem) {
    this.isValid = true;
    if (formData.detcomIdProducto == "0")
      this.isValid = false;
    else if (formData.detcomIdCantidad == 0)
      this.isValid = false;
    else if (formData.detcomPrecio == 0)
      this.isValid = false;
    return this.isValid;
  }
}
