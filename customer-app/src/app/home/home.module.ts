import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HomeComponent } from './home.component';
import { FormsModule } from '@angular/forms';
import { MainRoutingModule } from '../routing/main-routing.module';
import {
  BaseLogger,
  ConsoleLogger,
  DbLogger,
  FileLogger,
} from '../utility/Logger';

var loggerCollection: any = [];
loggerCollection.push({ provider: BaseLogger, useClass: ConsoleLogger });
loggerCollection.push({ provider: '1', useClass: FileLogger });
loggerCollection.push({ provider: '2', useClass: DbLogger });

@NgModule({
  declarations: [HomeComponent],
  imports: [BrowserModule, FormsModule, MainRoutingModule],
  providers: [loggerCollection],
  bootstrap: [HomeComponent],
})
export class HomeModule {}
