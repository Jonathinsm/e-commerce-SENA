//Modules
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {MomentModule} from 'angular2-moment';
import { RouterModule, Route } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';


//Components
import { PurchasesComponent } from './purchases.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { PurchaseService } from 'src/app/services/purchase.service';
import { PurchaseItemsComponent } from './purchase-items/purchase-items.component';
//Services


const purchasesRoutes: Route[] = [
    {
        path: 'compra',
        component:PurchasesComponent,
        children:[
            {path:'',component:PurchaseComponent},
            {path:'editar/:id', component: PurchaseComponent}
        ]
    }
  
  ];

@NgModule({
    declarations:[
        PurchasesComponent,
        PurchaseComponent,
        PurchaseItemsComponent
    ],
    imports:[
        CommonModule,
        FormsModule,
        RouterModule.forChild(purchasesRoutes),
        MomentModule,
        MatDialogModule,
        BrowserAnimationsModule
    ],
    exports:[
        PurchasesComponent,
        PurchaseComponent,
        PurchaseItemsComponent
    ],
    entryComponents:[PurchaseItemsComponent],
    providers:[PurchaseService]
})

export class PurchasesModule{}