import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-watch-page',
  templateUrl: './watch-page.component.html',
  styleUrls: ['./watch-page.component.scss']
})
export class WatchPageComponent implements OnInit {

  animeSlug: any;
  animeEpisode: any;
  commentText: String;

  comments = [
    {
      "id": "1",
      "user": "Jekorgi",
      "avatar": "",
      "text": "this is test message"
    },
    {
      "id": "2",
      "user": "Jekorgi",
      "avatar": "",
      "text": "this is test message"
    },
  ];


  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.animeSlug = this.route.params["_value"].slug;
    this.animeEpisode = this.route.params["_value"].episode;
    console.log(this.comments[0].user)
  }

  deleteComment(id: any) {
    this.comments.map((v, i) => {
      if (v.id == id) {
        this.comments.splice(i, 1);
        console.log(this.comments);
      }
    })
  }

  addComment(text: string) {
    this.comments.push({
      "id": this.comments.length.toString(),
      "user": "Jekorgi",
      "avatar": "",
      "text": text
    })
  }

}
