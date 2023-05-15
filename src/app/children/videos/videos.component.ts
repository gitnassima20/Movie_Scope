import { MovieService } from 'src/app/services/movie.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {

  videos: any[]=[]

  constructor(private route:ActivatedRoute,private movieService:MovieService){}

  ngOnInit(): void {
    this.route.parent?.params.subscribe((params:any) => {
      this.getVideos(params.id,params.count)
      
    })
    
  }

  getVideos(id: number,count : number){
    this.movieService.getVideos(id,count).subscribe(({results}:any) => {
      this.videos = results
      console.log(results)
    })
  }

}
