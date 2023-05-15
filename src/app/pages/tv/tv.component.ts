import { MovieService } from 'src/app/services/movie.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.css']
})
export class TvComponent implements OnInit {

  tvs: any[] = [];
  page : number = 1
  constructor(private movieService:MovieService){}

  ngOnInit(): void {
    this.getTvShows();
  }

  getTvShows(page:number=1){
    this.movieService.getTvShows(page).subscribe(({results}:any)=>
    {
      this.tvs=results;
      console.log("tvShows",results)
    })
  }
  
  baseUrl:string = 'https://image.tmdb.org/t/p/w300/'

  resolveImage(avatar:string){
    if(avatar){
      return `${this.baseUrl}${avatar}`
    }
    return '../assets/img/default-movie.jpg'
  }

  paginate(event:any){
    this.getTvShows(event.page +1 )
  }

}
