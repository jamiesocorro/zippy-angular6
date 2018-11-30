import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'zippy-angular6';

  recommendations = [];

  constructor() {
    this.recommendations = ['Hairdresser','Plumber','UX Designer','Frontend Developer','Digital Marketer'];
  }

  search($event) {
    let q = $event.target.value;
  }
}
