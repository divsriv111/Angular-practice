import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-course';

  onKeyUp(newTitle: string) {
    this.title = newTitle;
  }

  onTitleClick() {
    alert('title clicked');
  }
}
