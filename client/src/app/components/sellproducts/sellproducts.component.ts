import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute, Params } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { User } from '../../models/user';
import { Productlist } from '../../models/Productlist';
import { UserService } from '../../services/user.service';
import { VentaItem } from 'src/app/models/venta-item.model';
import { Venta } from 'src/app/models/venta.model';
import { SellService } from 'src/app/services/sell.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sellproducts',
  templateUrl: './sellproducts.component.html',
  styles: [],
  providers:  [UserService, ProductService, SellService]
})

export class SellproductsComponent implements OnInit {
  public title;
  public product: Productlist;
  public status: string;
  public user: User;
  public identity;
  public token;
  public productos: Productlist;
  public productsCart = [];
  public itemprd : VentaItem;
  public totalcompra;
  public  venta:  Venta;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService,
    private _productService: ProductService,
    private _sellService: SellService,
    private toastr: ToastrService,
  ) {
    this.title = "Productos Disponibles"
    this.user = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.identity = this.user;
  }

  ngOnInit() {
    this._productService.getProducts(this.token).subscribe(
      res =>{
        if(!res){
          console.log('Err');
        }else{
          this.productos = res;
        }
      },
      err =>{
        console.log(<any>err);
      }
    )
  }

  addToCart(id,nombre,precio,cant){
    let cantidad = 1;
    if(cant.value != ""){
      cantidad = cant.value;
    }
    this.itemprd = {
      prodid:id,
      prodnombre:nombre,
      precio:precio*cantidad,
      cantidad:cantidad
    }
    this.productsCart.push(this.itemprd)

  }

  calcTotal(){
    let total =0;
    for(let item of this.productsCart){
      total += item.precio;
    }
    this.totalcompra = total;
    return total;
  }

  onSubmit(){
    this.venta = {
      venIdCiente : this.user.usuId,
      venTotal : this.totalcompra,
      items :  this.productsCart
    }
    this._sellService.registerBill(this.venta).subscribe(
      res=>{
        if(res.status  == "Venta Registrada"){
          this.toastr.success('Su compra ha sido registrada!!', 'Compras Alpha');
          this._router.navigate(['/miscompras']);
        }else{

        }
      })
  }
}
