import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { HomeComponent } from './home/home.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import { PriceFormatterPipe } from './pipes/price-formatter.pipe';
import { ElectronicsProductDetailsComponent } from './electronics-product-details/electronics-product-details.component';
import { FilterComponent } from './filter/filter.component';
import { MensFashionComponent } from './mens-fashion/mens-fashion.component';
import { WomenFashionComponent } from './women-fashion/women-fashion.component';
import { KidsFashionComponent } from './kids-fashion/kids-fashion.component';
import { MenProductDetailsComponent } from './men-product-details/men-product-details.component';
import { WomenProductDetailsComponent } from './women-product-details/women-product-details.component';
import { KidsProductDetailsComponent } from './kids-product-details/kids-product-details.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { CartComponent } from './cart/cart.component';
import { CartProductComponent } from './cart-product/cart-product.component';
import { PriceDetailsComponent } from './price-details/price-details.component';
import { AccountComponent } from './account/account.component';
import { AdminComponent } from './admin/admin.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ElectronicsComponent,
    HomeComponent,
    NoPageFoundComponent,
    ProductListComponent,
    ProductComponent,
    PriceFormatterPipe,
    ElectronicsProductDetailsComponent,
    FilterComponent,
    MensFashionComponent,
    WomenFashionComponent,
    KidsFashionComponent,
    MenProductDetailsComponent,
    WomenProductDetailsComponent,
    KidsProductDetailsComponent,
    LoginComponent,
    RegisterComponent,
    CartComponent,
    CartProductComponent,
    PriceDetailsComponent,
    AccountComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
