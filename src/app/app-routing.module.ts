import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { ProductsDetailComponent } from './component/products-detail/products-detail.component';
import { ProductsComponent } from './component/products/products.component';

const routes: Routes = [
  {
    path:"home",
    component: HomeComponent
  },
  {
    path:"products",
    component: ProductsComponent
  },
  {
    path:"products/:id",
    component: ProductsDetailComponent
  },
  {
    path:"**",
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
