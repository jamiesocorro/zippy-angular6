import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'zippy-angular6';
  isLocation: boolean;
  isSearch: boolean;
  position: string;

  recommendations = [];

  constructor() {
    this.recommendations = ['Hairdresser', 'Plumber', 'UX Designer', 'Frontend Developer', 'Digital Marketer'];
    this.isLocation = false;
    this.isSearch = false;
  }

  chooseRecommendation(recommendation){
    this.position = recommendation;
    this.showSearch();
  }

  disable() {
    this.isLocation = !this.isLocation;
  }

  search($event) {
    let q = $event.key;

    var recommendations = this.recommendations.filter(function (recommendation) {
      return recommendation.includes(q);
    });

    this.recommendations = recommendations;

  }

  showSearch() {
    this.isSearch = !this.isSearch;
  }


}
