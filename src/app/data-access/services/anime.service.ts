import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Anime } from '../models/Anime.model';
import { Observable, of, from } from 'rxjs';
import { tap, take, concatMap } from 'rxjs/operators';
import * as _ from 'lodash'
import { map, takeWhile } from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {
  private readonly apiUrl: string;
  private allAnimes$: Observable<Anime[]>;

  constructor(private readonly http: HttpClient, @Inject('apiUrl') api: string) {
    this.apiUrl = api;
  }

  fetchAllAnime(): Observable<Anime[]> {
    return this.http.get<Anime[]>(`${this.apiUrl}/anime`).pipe(
      concatMap(animes => {
        animes.map(anime => {
          const todayTime = new Date().getTime();
          const animeTime = new Date(anime.creation).getTime();
          const ONE_MINUTE = 1000*60;
          const minutesLast = Math.floor(Math.abs(todayTime-animeTime)/ONE_MINUTE);

          if(minutesLast < 60){
            anime.creation = `${Math.floor(minutesLast)} minutes ago`;
          }else if(minutesLast >= 60 && minutesLast < 60 * 24){
            anime.creation = `${Math.floor(minutesLast/60)} hours ago`;
          }else if(minutesLast >= 60*24 && minutesLast < 60*24*30){
            anime.creation = `${Math.floor(minutesLast/60/24)} days ago`;
          }else if(minutesLast >= 60*24*30 && minutesLast < 60*24*30*12){
            anime.creation = `${Math.floor(minutesLast/60/24/30)} months ago`;
          }else if(minutesLast >= 60*24*30*12){
            anime.creation = `${Math.floor(minutesLast/60/24/30/12)} years ago`;
          }
        })
        return of(animes);
      })
    ) as Observable<Anime[]>;
  }

  fetch20Animes(): Observable<Anime[]> {
    if(this.allAnimes$ !== null && this.allAnimes$ !== undefined){
      return this.allAnimes$.pipe(
        concatMap(anime => {
          return of(_.take(anime, 8))
        })
      )
    }else{
      return this.fetchAllAnime().pipe(
        concatMap(anime => {
          return of(_.take(anime, 8))
        })
      )
    }
  }
}
