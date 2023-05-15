import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-similar',
  templateUrl: './similar.component.html',
  styleUrls: ['./similar.component.css']
})
export class SimilarComponent implements OnInit {
  constructor(private route: ActivatedRoute,private movieService:MovieService){}

  ngOnInit(): void {
    this.route.parent?.params.subscribe((params:any) => {
      this.getSimilar(params.id)
      console.log('params',params)
    })
  }

  similars: any[]= []
  
  getSimilar(id:number){
    this.movieService.getSimilarMovies(id).subscribe(({results}:any) => {
      this.similars = results
    })
  }

}
