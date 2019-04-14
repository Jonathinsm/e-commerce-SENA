import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute, Params } from '@angular/router';
import { UserService } from '../../services/user.service';
import { ProductService } from '../../services/product.service';
import { User } from '../../models/user';
import { Proveedor } from '../../models/provider';
import { Product } from '../../models/product';
import { Purchase } from '../../models/purchase';
import { Detpurchase } from '../../models/detpurchase';
import { PurchaseService } from '../../services/purchase.service'


@Component({
  selector: 'app-addpurchase',
  templateUrl: './addpurchase.component.html',
  styleUrls: ['./addpurchase.component.css'],
  providers:  [UserService, ProductService, PurchaseService]
})
export class AddpurchaseComponent implements OnInit {
  public title: string;
  public user: User;
  public purchase:  Purchase;
  public detpurchase: Detpurchase;
  public proveedores: Proveedor[];
  public productos: Product[];

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService,
    private _productService: ProductService,
    private _purchaseService: PurchaseService
  ) {
    this.title = "Registrar Nueva Compra";
    this.user = this._userService.getIdentity();
    this.purchase = new Purchase("","","",this.user.usuId);
    this.detpurchase = new Detpurchase("","1","","");
  }

  ngOnInit() {
    this._purchaseService.getAtributes().subscribe(
      res =>{
        if(res){
          this.proveedores = res.proveedores;
          this.productos = res.productos;
        }
      },
      err =>{
        console.log(<any>err);
      }
    )
  }
}
