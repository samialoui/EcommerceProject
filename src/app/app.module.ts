import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { Routes, RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductsComponent } from './components/products/products.component';
import { ShopingService } from './services/shoping.service';

const AppRoute: Routes=[
  {path:'', component: ProductsComponent},
  {path:'products', component:ProductsComponent},
  {path:'carts', component: CartComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CartComponent,
    ProductsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(AppRoute)
  ],
  providers: [
    ShopingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
