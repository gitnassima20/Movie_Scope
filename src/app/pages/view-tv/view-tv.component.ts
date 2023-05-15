import { MovieService } from 'src/app/services/movie.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-view-tv',
  templateUrl: './view-tv.component.html',
  styleUrls: ['./view-tv.component.css']
})
export class ViewTvComponent implements OnInit {

  constructor(private route:ActivatedRoute,private movieService:MovieService){}

  ngOnInit() {
    this.route.params.subscribe((params:any)=>{
      this.getTvInfo(params.id) 
    })
  }

  tv ={
    overview:'',
    backdrop_path:'',
    popularity:null,
    vote_average:null,
    original_name:'',
    vote_count:null,
    first_air_date:''
  }

  getTvInfo(id:number){
    this.movieService.getOnlyTv(id).subscribe((res:any) =>{
      this.tv=res;
    })

  }

}
