import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { ViewCartComponent } from './view-cart/view-cart.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProductDetailsComponentComponent } from './product-details-component/product-details-component.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'all-products', component: AllProductsComponent },
  { path: 'view-cart', component: ViewCartComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'all-products/:productId',
    component: ProductDetailsComponentComponent,
  },
];
