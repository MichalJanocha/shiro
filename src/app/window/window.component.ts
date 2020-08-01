import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-window',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.scss']
})
export class WindowComponent implements OnInit {

  constructor() { }

  @Input()
  rnSection: string;
  randomSection: unknown;
  image: String = " ";

  ngOnInit(): void {
    this.randomSection = this.rnSection;
  }

}
