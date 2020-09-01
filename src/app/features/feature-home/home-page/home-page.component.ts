import { Component, OnInit } from '@angular/core';
import { AnimeService } from '@app/data-access/services/anime.service';
import { Anime } from '@app/data-access/models/Anime.model';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  allAnimes$ : Observable<Anime[]>;
  fewAnimes$ : Observable<Anime[]>;

  constructor(private readonly animeServ: AnimeService) { }

  ngOnInit(): void {
    this.allAnimes$ = this.animeServ.fetchAllAnime();
    this.fewAnimes$ = this.animeServ.fetch20Animes();
  }

}
