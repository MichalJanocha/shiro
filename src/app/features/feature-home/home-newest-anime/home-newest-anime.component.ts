import { Component, OnInit, Input } from '@angular/core';
import { Anime } from '@app/data-access/models/Anime.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home-newest-anime',
  templateUrl: './home-newest-anime.component.html',
  styleUrls: ['./home-newest-anime.component.scss'],
})
export class HomeNewestAnimeComponent implements OnInit {

  @Input() fewAnimes$: Observable<Anime[]>;

  constructor() { }

  ngOnInit() {}

}
