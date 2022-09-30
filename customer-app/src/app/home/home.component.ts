import { Component, Injector } from '@angular/core';
import { BaseLogger } from '../utility/Logger';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  title = 'customer-app';

  logger!: BaseLogger;

  constructor(_injector: Injector) {
    this.logger = _injector.get('2');
    this.logger.Log();
  }
}
