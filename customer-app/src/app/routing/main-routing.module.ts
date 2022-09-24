import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';

const mainRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'customer',
    loadChildren: () =>
      import('../customer/customer.module').then((m) => m.CustomerModule),
  },
  {
    path: 'supplier',
    loadChildren: () =>
      import('../supplier/supplier.module').then((m) => m.SupplierModule),
  },
  { path: '', component: HomeComponent },
  { path: '*', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(mainRoutes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
