import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NewsBlockComponent } from './news-block/news-block.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RankingPageComponent } from './ranking-page/ranking-page.component';
import { WindowComponent } from './window/window.component';
import { ListComponent } from './list/list.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { ShiroBlogBlockComponent } from './shiro-blog-block/shiro-blog-block.component';
import { FooterComponent } from './footer/footer.component';
import { AccountPageComponent } from './account-page/account-page.component';
import { SignFormComponent } from './sign-form/sign-form.component';
import { WatchPageComponent } from './watch-page/watch-page.component';
import { SearchPageComponent } from './search-page/search-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    NewsBlockComponent,
    HomePageComponent,
    RankingPageComponent,
    WindowComponent,
    ListComponent,
    StatisticsComponent,
    ShiroBlogBlockComponent,
    FooterComponent,
    AccountPageComponent,
    SignFormComponent,
    WatchPageComponent,
    SearchPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
