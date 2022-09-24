import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HomeComponent } from './home.component';
import { FormsModule } from '@angular/forms';
import { MainRoutingModule } from '../routing/main-routing.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [BrowserModule, FormsModule, MainRoutingModule],
  providers: [],
  bootstrap: [HomeComponent],
})
export class HomeModule {}
