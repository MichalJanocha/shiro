import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-news-block',
  templateUrl: './news-block.component.html',
  styleUrls: ['./news-block.component.scss']
})
export class NewsBlockComponent implements OnInit {

  constructor() { }

  @Input()
  blockData: { label: string, icon: string, title?: string, video?: string, buttons?: [] };
  title: String;
  label: String;
  buttons: [];
  icon: String;
  video: String;

  ngOnInit(): void {
    this.title = this.blockData.title;
    this.label = this.blockData.label;
    this.buttons = this.blockData.buttons;
    this.icon = this.blockData.icon;
    this.video = this.blockData.video;
  }

}
