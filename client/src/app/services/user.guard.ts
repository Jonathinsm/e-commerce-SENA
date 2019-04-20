import {Injectable} from '@angular/core';
import {Router,CanActivate} from '@angular/router';
import {UserService} from './user.service';

@Injectable()
export class UserGuard implements CanActivate {

    constructor(
        private _router: Router,
        private _userService: UserService
    ){
    }
    canActivate(){
        let identity = this._userService.getIdentity();

        if(identity && (identity.usuIdRole == '1' || identity.usuIdRole == '2' || identity.usuIdRole == '3')){
            return true;
        }else{
            this._router.navigate(['/acceder']);
            return false;
        }
    }
}