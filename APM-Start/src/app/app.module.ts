import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {ProductListComponent} from './products/product-list.component';
import {FormsModule} from '@angular/forms';
import {ConvertToSpacesPipe} from './shared/convert-to-spaces.pipe';
import {StarComponent} from './shared/star/star.component';
import {ProductDetailsComponent} from './products/product-details.component';
import {WelcomeComponent} from './home/welcome.component';
import {RouterModule} from '@angular/router';
import {ProductDetailGuard} from './products/product-detail.guard';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ProductListComponent,
    ConvertToSpacesPipe,
    StarComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'products',  component: ProductListComponent},
      {
        path: 'products/:id',
        component:ProductDetailsComponent,
        canActivate:[ProductDetailGuard]
      },
      {path: 'welcome', component:WelcomeComponent},
      {path: '', redirectTo:'welcome', pathMatch: 'full'},
      {path: '**', redirectTo: 'welcome', pathMatch: 'full'}
    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
