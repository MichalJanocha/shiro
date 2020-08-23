import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-sign-page',
  templateUrl: './sign-page.component.html',
  styleUrls: ['./sign-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
