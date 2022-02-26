import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElectronicsProductDetailsComponent } from './electronics-product-details/electronics-product-details.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { HomeComponent } from './home/home.component';
import { KidsFashionComponent } from './kids-fashion/kids-fashion.component';
import { KidsProductDetailsComponent } from './kids-product-details/kids-product-details.component';
import { LoginComponent } from './login/login.component';
import { MenProductDetailsComponent } from './men-product-details/men-product-details.component';
import { MensFashionComponent } from './mens-fashion/mens-fashion.component';
import { RegisterComponent } from './register/register.component';
import { WomenFashionComponent } from './women-fashion/women-fashion.component';
import { WomenProductDetailsComponent } from './women-product-details/women-product-details.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"home",component:HomeComponent},
  {path:"electronics",component:ElectronicsComponent},
  {path:"electronics/details/:id",component:ElectronicsProductDetailsComponent},
  {path:"mensfashion/details/:id",component:MenProductDetailsComponent},
  {path:"womenfashion/details/:id",component:WomenProductDetailsComponent},
  {path:"kidsfashion/details/:id",component:KidsProductDetailsComponent},
  {path:"mensfashion",component:MensFashionComponent},
  {path:"womenfashion",component:WomenFashionComponent},
  {path:"kidsfashion",component:KidsFashionComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
