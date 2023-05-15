import { SeasonsComponent } from './children-tv/seasons/seasons.component';
import { RecomComponent } from './children-tv/recom/recom.component';
import { ActorsTvComponent } from './children-tv/actors-tv/actors-tv.component';
import { ViewTvComponent } from './pages/view-tv/view-tv.component';
import { VideosComponent } from './children/videos/videos.component';
import { ActorsComponent } from './children/actors/actors.component';
import { SimilarComponent } from './children/similar/similar.component';
import { ViewMovieComponent } from './pages/view-movie/view-movie.component';
import { TvComponent } from './pages/tv/tv.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { ImagesComponent } from './children/images/images.component';

const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"movies" ,component:MoviesComponent},
  
  {path:"tv",component:TvComponent},
  {path:"tv/:id",component:ViewTvComponent,children:[
    { path:'actors',component:ActorsTvComponent},
    { path:'recommendations',component:RecomComponent},
    { path:'seasons',component:SeasonsComponent}
  ]}
  ,
  {path:"categories",component:CategoriesComponent},
  {path:"movie/:id",component:ViewMovieComponent,children:[

    { path:'similar',component:SimilarComponent},
    { path:'actors',component:ActorsComponent},
    { path:'images',component:ImagesComponent},
    { path:'videos',component:VideosComponent}
   ]
  },
  
  {path:"**",redirectTo:"/"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
