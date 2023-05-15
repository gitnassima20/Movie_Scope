import { MovieService } from 'src/app/services/movie.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-movie',
  templateUrl: './view-movie.component.html',
  styleUrls: ['./view-movie.component.css']
})
export class ViewMovieComponent implements OnInit  {

  constructor(private route:ActivatedRoute,private movieService:MovieService){}

  movie={
    overview:'',
    backdrop_path:'',
    popularity:null,
    vote_average:null,
    title:'',
    tagline:'',
    vote_count:null,
    status:'',
    release_date:''

  }
  
  ngOnInit(): void {
    this.route.params.subscribe((params:any) =>{ 
      this.getMovieInfo(params.id)
      console.log(params) 
    })  
  }

  getMovieInfo(id:number){
    this.movieService.getOnlyMovie(id).subscribe((responce:any) => {
      this.movie = responce
    console.log(responce)
    })
  }
   
  
}
