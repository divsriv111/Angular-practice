import { Component } from '@angular/core';
import { BaseLogger } from '../utility/Logger';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  title = 'customer-app';

  logger!: BaseLogger;

  constructor(_logger: BaseLogger) {
    this.logger = _logger;
    this.logger.Log();
  }
}
