import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor() { }

  @Input() getDataFrom: string;
  @Input() listCols: { cols: Array<String> };

  dataEndpoint: string;
  cols: {};

  ngOnInit(): void {
    this.dataEndpoint = this.getDataFrom;
    this.cols = this.listCols.cols;
  }

}
