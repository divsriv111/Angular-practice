import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SupplierComponent } from '../supplier/supplier.component';

const supplierRoutes: Routes = [
  { path: 'add', component: SupplierComponent },
  { path: '', component: SupplierComponent },
];

@NgModule({
  imports: [RouterModule.forChild(supplierRoutes)],
  exports: [RouterModule],
})
export class SupplierRoutingModule {}
