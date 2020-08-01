import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor() { }

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

  ngOnInit(): void {
  }

}
