import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute, Params } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { error } from 'protractor';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})
export class LoginComponent implements OnInit {
  public title: string;
  public user: User;
  public status: string;
  public identity;
  public token;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService
  ) { 
    this.title = 'Identificate';
    this.user = new User("","","","","","","","","","","");
  }

  ngOnInit() {
  }

  onSubmit(){
    //Logear al usuario y obtener sus  datos
    this._userService.signup(this.user).subscribe(
      res => {
        if(res.message){
          this.status =  'error';
        }else{
          this.identity = res.usuario;
          if(!this.identity || !this.identity.usuId){
            this.status = 'error';
          }else{
            this.status = 'success';
            console.log(this.identity);

            //PERSISTIR DATOS DEL USUARIO
            localStorage.setItem('identity', JSON.stringify(this.identity));

            //Conseguir  el token
            this.getToken();
          }
        }
      },
      err => {
        var errorMessage = <any>err;
        console.log(errorMessage);
        if(errorMessage != null){
          this.status =  'error';
        }

      }
    )
  }

  getToken(){
    this._userService.signup(this.user, 'true').subscribe(
      res =>{
        if(res.message){
          this.status =  'error';
        }else{
          this.token = res.token;
          console.log(this.token);
          if(this.token.length <= 0){
            this.status = 'error';
          }else{
            this.status = 'success';

            //Persistir token del usuario
            localStorage.setItem('token', JSON.stringify(this.token));

            this._router.navigate(['/']);
          }
        }   
      },
      err =>{
        var errorMsg = <any>err;
        console.log(errorMsg);
        if(errorMsg != null){
          this.status = 'error';
        }
      }
    )    
  }
}
