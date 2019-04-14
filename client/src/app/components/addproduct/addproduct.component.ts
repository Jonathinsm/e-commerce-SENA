import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute, Params } from '@angular/router';
import { User } from '../../models/user';
import { Product } from '../../models/product';
import {Unidad} from "../../models/unidad";
import {Categoria} from "../../models/categoria";
import {Presentacion} from "../../models/presentacion";
import {Marca} from "../../models/marca";
import { UserService } from '../../services/user.service';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css'],
  providers:  [UserService, ProductService]
})
export class AddproductComponent implements OnInit {
  public title: string;
  public product: Product;
  public status: string;
  public user: User;
  public identity;
  public unidades: Unidad[];
  public categorias: Categoria[];
  public presentaciones: Presentacion[];
  public marcas: Marca[];

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService,
    private _productService: ProductService
  ) {
    this.title = "Registrar Nuevo Producto";
    this.user = this._userService.getIdentity();
    this.identity = this.user;
    this.product = new Product("0","","","","","","","",this.user.usuId);
  }

  ngOnInit() {
    this._productService.getAtributes().subscribe(
      res =>{
        if(res){
          this.unidades = res.unidades;
          this.categorias = res.categorias;
          this.presentaciones = res.presentaciones;
          this.marcas = res.marcas;
        }
      },
      err =>{
        console.log(<any>err);
      }
    )
  }

  onSubmit(form){
    this._productService.register(this.product).subscribe(
      res =>{
          if(res.message == 'Producto creado'){
            this.status = 'success';
            console.log(res);
            form.reset();
          }else{
            this.status = 'error';
            console.log(res);
          } 
      },
      err => {
        console.log(<any>err)
      }
    );
  }

}
