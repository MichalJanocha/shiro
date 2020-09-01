import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AnimeService } from '@app/data-access/services/anime.service';

@Component({
  selector: 'app-watch-page',
  templateUrl: './watch-page.component.html',
  styleUrls: ['./watch-page.component.scss'],
})
export class WatchPageComponent implements OnInit {

  currentSelection: string = 'servers';


  constructor(private readonly router: ActivatedRoute, private readonly animeServ: AnimeService) { }

  ngOnInit() {
    const animeSlug = this.router.snapshot.paramMap.get("slug");

  }

  segmentChanged(event){
    this.currentSelection = event.detail.value;
  }

}
