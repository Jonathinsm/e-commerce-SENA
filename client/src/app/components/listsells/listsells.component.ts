import { Component, OnInit } from '@angular/core';
import { SellService } from 'src/app/services/sell.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-listsells',
  templateUrl: './listsells.component.html',
  styles: [],
  providers:  [SellService,UserService]
})
export class ListsellsComponent implements OnInit {
  public sellsList;
  public user: User;
  identity;
  token;
  title;

  constructor(
    public _sellService: SellService,
    public _userService: UserService
  ) {
    this.title = "Mi Historial de Compras",
    this.user = this._userService.getIdentity();
    this.identity = this.user;
    this.token = this._userService.getToken();
  }

  ngOnInit() {
    this._sellService.GetBills(this.token).subscribe(
      res=>{
        if(res.length>0){
          this.sellsList = res;
        }
      },
      err=>{
        console.log(err);
      }
    )
  }

}
