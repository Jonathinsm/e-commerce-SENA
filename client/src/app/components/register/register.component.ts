import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute, Params } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers:  [UserService]
})
export class RegisterComponent implements OnInit {
  public title: string;
  public user: User;
  public status: string;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService

  ) {
    this.title = "Registro";
    this.user = new User("0","","","","","","","","1","1","1");
  }

  ngOnInit() {
  }

  onSubmit(form){
    //console.log(this.user)
    this._userService.register(this.user).subscribe(
      response =>{
          if(response.message == 'Usuario  guardado'){
            this.status = 'success';
            console.log(response);
            form.reset();
          }else{
            this.status = 'error';
            console.log(response);
          } 
      },
      error => {
        console.log(<any>error)
      }
    );
  }
}
