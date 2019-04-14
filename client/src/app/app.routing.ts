import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Componentes
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { EdituserComponent } from './components/edituser/edituser.component';
import { EditcardComponent } from './components/editcard/editcard.component';
import { AddproductComponent } from './components/addproduct/addproduct.component';
import { ListproductsComponent } from './components/listproducts/listproducts.component';

const appRoutes: Routes = [
    {path: '', component: HomeComponent },
    {path: 'acceder', component:  LoginComponent },
    {path: 'registro', component: RegisterComponent},
    {path: 'misdatos', component: EdituserComponent},
    {path: 'mistarjetas', component: EditcardComponent},
    {path: 'nuevoproducto', component: AddproductComponent},
    {path: 'listarproductos', component: ListproductsComponent}
];

export const appRoutingProviders:  any [] = [];
export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes)