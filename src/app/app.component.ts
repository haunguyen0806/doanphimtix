import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', // link tới file html, code UI
  styleUrls: ['./app.component.scss'], // link tới files css/scss, code style
})
// Nơi code logic
export class AppComponent {
  title = 'fe42-angular';
}
