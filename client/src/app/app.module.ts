import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing, appRoutingProviders } from './app.routing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MomentModule } from 'angular2-moment';

//Otro componente
import { PurchasesModule } from './components/purchases/purchases.module';

//Componentes

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { from } from 'rxjs';
import { HomeComponent } from './components/home/home.component';
import { EdituserComponent } from './components/edituser/edituser.component';
import { EditcardComponent } from './components/editcard/editcard.component';
import { AddproductComponent } from './components/addproduct/addproduct.component';
import { ListproductsComponent } from './components/listproducts/listproducts.component';
import { AddpurchaseComponent } from './components/addpurchase/addpurchase.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    EdituserComponent,
    EditcardComponent,
    AddproductComponent,
    ListproductsComponent,
    AddpurchaseComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpClientModule,
    MomentModule,
    PurchasesModule,
    NoopAnimationsModule
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
