import { Component, OnInit, DoCheck } from '@angular/core';
import { UserService } from './services/user.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
//import * as jQuery from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[UserService]
})
export class AppComponent implements OnInit, DoCheck {
  public title : string;
  public  identity;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService
  ){
    this.title = 'Alpha'
  }

  //Persiste los datos de la sesión
  ngOnInit(){
    this.identity = this._userService.getIdentity();
  }

  //Verifica  la identidad del suario
  ngDoCheck(){
    this.identity = this._userService.getIdentity();
  }

  //Cerrar la sesión
  logout(){
    localStorage.clear();
    this.identity = null;
    this._router.navigate(['/']);
  }
}
