import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private movieService:MovieService){}
  
  upComingMovies :any[]=[]
  upPopularMovies :any[]=[] 

  ngOnInit(): void {
    this.getUpComing();
    this.getPopular();
  }
  
  //getting only a param(results) from the responce:
  getUpComing(){
    this.movieService.getMovies('upcoming').subscribe(({results}:any)=>{
      this.upComingMovies = results;
      console.log(results)
    })
  }
  
  getPopular(){
    this.movieService.getMovies('popular').subscribe((results:any)=>{
      this.upPopularMovies = results;
      console.log('popular',results)
    })
  }
}
