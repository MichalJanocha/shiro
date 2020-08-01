import { dropdownAnimation } from './../animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  animations: [
    dropdownAnimation
  ]
})
export class NavigationComponent implements OnInit {
  animeState = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleDropdown() {
    this.animeState = !this.animeState;
  }
}
