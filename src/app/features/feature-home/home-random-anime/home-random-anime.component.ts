import { Component, OnInit, Input } from '@angular/core';
import { Anime } from '@app/data-access/models/Anime.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home-random-anime',
  templateUrl: './home-random-anime.component.html',
  styleUrls: ['./home-random-anime.component.scss'],
})
export class HomeRandomAnimeComponent implements OnInit {

  @Input() allAnimes$: Observable<Anime[]>;

  allAnimes: Anime[];
  currentAnime: Anime;

  constructor() { }

  ngOnInit() {
    this.allAnimes$.subscribe(anime => {
      this.allAnimes = anime;
      this.getRandomAnime();
    })
  }

  getRandomAnime(){
    this.currentAnime = this.allAnimes[Math.floor(Math.random()*this.allAnimes.length)]
  }

}
