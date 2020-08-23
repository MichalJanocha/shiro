import { Component, OnInit } from '@angular/core';
import { AnimeService } from '@app/data-access/services/anime.service';
import { Anime } from '@app/data-access/models/Anime.model';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  allAnimes : Anime[];

  constructor(private readonly animeServ: AnimeService) { }

  ngOnInit(): void {
    this.animeServ.fetch20Animes().pipe().subscribe(data => {
      this.allAnimes = data;
      console.log(data);
    })

  }

}
