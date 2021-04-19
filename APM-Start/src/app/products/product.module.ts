import {NgModule} from '@angular/core';
import {ProductListComponent} from './product-list.component';
import {ProductDetailsComponent} from './product-details.component';
import {RouterModule} from '@angular/router';
import {ProductDetailGuard} from './product-detail.guard';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailsComponent
  ],
  imports: [
    RouterModule.forChild([
      {path: 'products',  component: ProductListComponent},
      {
        path: 'products/:id',
        component:ProductDetailsComponent,
        canActivate:[ProductDetailGuard]
      }
    ]),
    SharedModule
  ]
})
export class ProductModule { }
