import { Injectable } from '@angular/core';
import { Purchase } from './purchase.model';
import { PurchaseItem } from './purchase-item.model';

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {
  formData:Purchase;
  purchaseItems:PurchaseItem[];

  constructor() { }
}
