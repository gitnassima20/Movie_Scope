import { MovieService } from 'src/app/services/movie.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  query: string = ""
  upPopularMovies: any[]=[]
  
  constructor(private movieService:MovieService ){}

  ngOnInit(): void {
    this.getPopular();
  }
  
  searchMovie(page:number = 1){
    if(this.query){
      this.movieService.SearchMovie(this.query,page).subscribe((data:any)=>{
        this.upPopularMovies = data.results
      })
      return
    }
    this.getPopular()

    
  }
  getPopular(page:number = 25){
    this.movieService.getMovies('popular',page).subscribe((data:any)=>{
      this.upPopularMovies = data.results;
    })
  }

  paginate(event:any){
    this.getPopular(event.page +1);
    this.searchMovie(event.page +1);
  }

}
