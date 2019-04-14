import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { PurchaseItem } from '../../shared/purchase-item.model';

@Component({
  selector: 'app-purchase-items',
  templateUrl: './purchase-items.component.html',
  styles: []
})
export class PurchaseItemsComponent implements OnInit {
  formData:PurchaseItem;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<PurchaseItemsComponent>
  ) { }

  ngOnInit() {
  }

}
