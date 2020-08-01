import { SearchPageComponent } from './search-page/search-page.component';
import { WatchPageComponent } from './watch-page/watch-page.component';
import { AccountPageComponent } from './account-page/account-page.component';
import { RankingPageComponent } from './ranking-page/ranking-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent, data: { state: "home" } },
  { path: 'ranking', component: RankingPageComponent, data: { state: "ranking" } },
  { path: 'account', component: AccountPageComponent, data: { state: "account" } },
  { path: 'search', component: SearchPageComponent, data: { state: "search" } },
  { path: 'watch/:slug/:episode', component: WatchPageComponent, data: { state: "category" } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
