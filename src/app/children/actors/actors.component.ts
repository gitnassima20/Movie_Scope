import { MovieService } from 'src/app/services/movie.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.css']
})
export class ActorsComponent implements OnInit {

  constructor(private route: ActivatedRoute,private movieService:MovieService){}
  
  actors : any[]=[]


  ngOnInit(): void {
    this.route.parent?.params.subscribe((params:any) => {
      this.getActors(params.id)
    })
  }
  
  getActors(id:number){
    this.movieService.getActors(id).subscribe(({cast}:any) => {
      this.actors = cast
      console.log(cast)
    })
  }
  
   baseUrl:string = 'https://image.tmdb.org/t/p/w300/'

  resolveImage(avatar:string){
    if(avatar){
      return `${this.baseUrl}${avatar}`
    }
    return '../assets/img/9425430.png'
  }
}
