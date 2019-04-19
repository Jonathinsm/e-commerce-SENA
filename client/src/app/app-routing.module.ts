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

const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'acceder', component:  LoginComponent },
  {path: 'registro', component: RegisterComponent},
  {path: 'misdatos', component: EdituserComponent},
  //{path: 'mistarjetas', component:},
  {path: 'miscompras', component: ListsellsComponent},
  {path: 'nuevoproducto', component: AddproductComponent},
  {path: 'listarproductos', component: ListproductsComponent},
  {path:'pedidos',component: OrdersComponent},
  {path:'pedido',children:[
    {path:'',component:OrderComponent},
    {path:'editar/:id',component:OrderComponent}
  ]},
  {path: 'compras', component: SellproductsComponent},
  {path: 'contacto', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
