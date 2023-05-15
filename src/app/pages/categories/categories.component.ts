import { MovieService } from 'src/app/services/movie.service';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { SidebarComponent } from 'src/app/sidebar/sidebar.component';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
  trending: any[] = [];
  selectedGenres: any[]=[]
  filteredTrending: any[] = [];

  constructor(private movieService: MovieService){}

  ngOnInit() {
    this.getTrending();
  }
  getTrending(){
    this.movieService.getTrending().subscribe(({results}:any)=>{
      this.trending= results
      console.log("trend",results)
    })
  }

  onSelectedGenres(selectedGenres: any[]) {
    if (selectedGenres.length > 0) {
      this.filteredTrending = this.trending.filter((trend: any) => {
        const trendGenres = trend.genre_ids;
        return selectedGenres.every((genreId: number) => trendGenres.includes(genreId));
      });
    } else {
      this.filteredTrending = this.trending;
    }
  }

  onCloseSidebar() {
    console.log('Closing sidebar...');
  }
 
}

  
  


