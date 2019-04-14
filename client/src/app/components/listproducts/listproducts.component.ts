import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute, Params } from '@angular/router';
import { User } from '../../models/user';
import { Productlist } from '../../models/Productlist';
import { UserService } from '../../services/user.service';
import { ProductService } from '../../services/product.service';


@Component({
  selector: 'app-listproducts',
  templateUrl: './listproducts.component.html',
  styleUrls: ['./listproducts.component.css'],
  providers:  [UserService, ProductService]
})
export class ListproductsComponent implements OnInit {
  public title: string;
  public product: Productlist;
  public status: string;
  public user: User;
  public identity;
  public token;
  public productos: Productlist[];

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService,
    private _productService: ProductService
  ) {
    this.title = "Todos los productos";
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

}
