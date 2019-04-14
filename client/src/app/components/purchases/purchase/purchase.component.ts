import { Component, OnInit } from '@angular/core';
import { PurchaseService } from '../../shared/purchase.service';
import { MatDialog,MatDialogConfig } from '@angular/material/dialog';
import { PurchaseItemsComponent } from '../purchase-items/purchase-items.component';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styles: []
})
export class PurchaseComponent implements OnInit {

  constructor(
    private service: PurchaseService,
    private dialog: MatDialog,
    private router: Router,
    private currentRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?:NgForm){
    if(form=null)
    form.resetForm();
    this.service.formData={
      comId: Math.floor(100000 + Math.random()* 900000).toString(),
      comTotal: "",
      comIdProveedor: "",
      comIdUsuario: ""
    }
    this.service.purchaseItems = [];
  }

  AddOrEditPurchaseItem(purchaseItemIndex, PurchaseID){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = "50%";
    dialogConfig.data = {purchaseItemIndex, PurchaseID};
    this.dialog.open(PurchaseItemsComponent, dialogConfig);
  }
}
