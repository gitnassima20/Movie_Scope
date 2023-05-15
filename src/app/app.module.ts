import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { TvComponent } from './pages/tv/tv.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { HttpClientModule} from '@angular/common/http';
import { SliderComponent } from './pages/slider/slider.component';
import { CardComponent } from './pages/card/card.component';
import { ViewMovieComponent } from './pages/view-movie/view-movie.component';
import { SimilarComponent } from './children/similar/similar.component';
import { ActorsComponent } from './children/actors/actors.component';
import { ImagesComponent } from './children/images/images.component';
import { VideosComponent } from './children/videos/videos.component';
import { YoutubeVidComponent } from './children/youtube-vid/youtube-vid.component';
import { FormsModule } from '@angular/forms';
import { PaginatorModule } from 'primeng/paginator';
import { RatingModule } from 'primeng/rating';
import { ImageModule } from 'primeng/image';
import { ViewTvComponent } from './pages/view-tv/view-tv.component';
import { SeasonsComponent } from './children-tv/seasons/seasons.component';
import { RecomComponent } from './children-tv/recom/recom.component';
import { ActorsTvComponent } from './children-tv/actors-tv/actors-tv.component';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { SidebarComponent } from './sidebar/sidebar.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MoviesComponent,
    TvComponent,
    CategoriesComponent,
    SliderComponent,
    CardComponent,
    ViewMovieComponent,
    SimilarComponent,
    ActorsComponent,
    ImagesComponent,
    VideosComponent,
    YoutubeVidComponent,
    ViewTvComponent,
    SeasonsComponent,
    RecomComponent,
    ActorsTvComponent,
    SidebarComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    PaginatorModule,
    RatingModule,
    ImageModule,
    SidebarModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
