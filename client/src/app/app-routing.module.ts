import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


//Componentes
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { EdituserComponent } from './components/edituser/edituser.component';
import { AddproductComponent } from './components/addproduct/addproduct.component';
import { ListproductsComponent } from './components/listproducts/listproducts.component';
import { OrdersComponent } from './components/orders/orders.component';
import { OrderComponent } from './components/orders/order/order.component';
import { SellproductsComponent } from './components/sellproducts/sellproducts.component';
import { ListsellsComponent } from './components/listsells/listsells.component';
import { ContactComponent } from './components/contact/contact.component';

import { UserGuard } from './services/user.guard';

//Rutas de mi aplicación
const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'acceder', component:  LoginComponent },
  {path: 'registro', component: RegisterComponent},
  {path: 'misdatos', component: EdituserComponent, canActivate:[UserGuard]},
  //{path: 'mistarjetas', component:},
  {path: 'miscompras', component: ListsellsComponent, canActivate:[UserGuard]},
  {path: 'nuevoproducto', component: AddproductComponent, canActivate:[UserGuard]},
  {path: 'listarproductos', component: ListproductsComponent, canActivate:[UserGuard]},
  {path:'pedidos',component: OrdersComponent, canActivate:[UserGuard]},
  {path:'pedido',children:[
    {path:'',component:OrderComponent, canActivate:[UserGuard]},
    {path:'editar/:id',component:OrderComponent, canActivate:[UserGuard]}
  ]},
  {path: 'compras', component: SellproductsComponent, canActivate:[UserGuard]},
  {path: 'contacto', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
