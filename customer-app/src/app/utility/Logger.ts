import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BaseLogger {
  Log() {
    console.log('using base logger');
  }
}

export class DbLogger extends BaseLogger {
  override Log() {
    console.log('using Db logger');
  }
}

export class ConsoleLogger extends BaseLogger {
  override Log() {
    console.log('using console logger');
  }
}

export class FileLogger extends BaseLogger {
  override Log() {
    console.log('using File logger');
  }
}
