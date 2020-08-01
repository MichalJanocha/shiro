import { routerTransition } from './animations';
import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    routerTransition
  ]
})
export class AppComponent {
  loading = false;

  constructor() {

  }

  getOutlet(outlet) {
    console.log(outlet.activatedRouteData.state);
    return outlet.activatedRouteData.state;
  }

  b1Data = {
    "title": "Happy easter",
    "label": "Newest News",
    "icon": "fas fa-newspaper",
    "buttons": [
      "Show me", "Author", "Views"
    ]
  }
  b2Data = {
    "label": "Most watched anime",
    "icon": "fas fa-camera",
    "buttons": [

    ],
    "video": "http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
  }
}
