import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute, Params } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css'],
  providers:  [UserService]
})
export class EdituserComponent implements OnInit {
  public title : string;
  public user: User;
  public identity;
  public token;
  public status: string;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService
  ) {
    this.title = "Actualizar mis datos";
    this.user = this._userService.getIdentity();
    this.identity = this.user;
    this.token = this._userService.getToken();
  }

  ngOnInit() {
  }

  onSubmit(){
    this._userService.updateUser(this.user).subscribe(
      res =>{
        if(res.message != "Usuario actualizado"){
          this.status = 'error';
          console.log(res)
        }else{
          this.status = 'success';
          localStorage.setItem('identity', JSON.stringify(this.user));
          this.identity = this.user;
        }
      },
      err =>  {
        var errMessage = <any>err;
        console.log(errMessage);

        if(errMessage!= null){
          this.status = 'error';
        }
      }
    )
  }

}
