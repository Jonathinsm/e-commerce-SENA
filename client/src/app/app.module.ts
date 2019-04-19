import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MomentModule } from 'angular2-moment';
import { ToastrModule } from 'ngx-toastr';

//Componentes Angular
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material';

//Componentes mi app
import { HomeComponent } from './components/home/home.component';
import { EdituserComponent } from './components/edituser/edituser.component';
import { AddproductComponent } from './components/addproduct/addproduct.component';
import { ListproductsComponent } from './components/listproducts/listproducts.component';

//Services
import { PurchaseService } from './services/purchase.service';
import { OrdersComponent } from './components/orders/orders.component';
import { OrderComponent } from './components/orders/order/order.component';
import { OrderItemsComponent } from './components/orders/order-items/order-items.component';
import { OrderService } from './components/shared/order.service';
import { SellproductsComponent } from './components/sellproducts/sellproducts.component';
import { ListsellsComponent } from './components/listsells/listsells.component';
import { ContactComponent } from './components/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    EdituserComponent,
    AddproductComponent,
    ListproductsComponent,
    OrdersComponent,
    OrderComponent,
    OrderItemsComponent,
    SellproductsComponent,
    ListsellsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MomentModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    ToastrModule.forRoot()
  ],
  entryComponents:[OrderItemsComponent],
  providers: [OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
