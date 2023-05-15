import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { combineLatest } from 'rxjs';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  sidebarVisible:boolean = false;

  tvCategory: any[]= [];
  movieCategory: any[]= [];

  @Output() selectedGenres = new EventEmitter<any[]>();
  @Output() closeSidebar = new EventEmitter<void>();

  constructor(private movieService: MovieService){}

  ngOnInit(): void {
    this.getMovieCategory();
    this.getTvCategory();
  }

  getTvCategory(){
    this.movieService.getAnyGenres('tv').subscribe(({genres}:any)=>{
      this.tvCategory=genres
      console.log(genres)
    })
  }
  
  getMovieCategory(){
    this.movieService.getAnyGenres('movie').subscribe(({genres}:any)=>{
      this.movieCategory=genres
    })
  }

  onGenreSelect(id: number, type: string, checked: boolean) {
    const selectedGenres: any[] = [];
  
    if (type === 'tv') {
      this.tvCategory.forEach(tvcat => {
        if (tvcat.id === id) {
          tvcat.checked = checked;
        }
        if (tvcat.checked) {
          selectedGenres.push(tvcat.id);
        }
      });
    } else {
      this.movieCategory.forEach(moviecat => {
        if (moviecat.id === id) {
          moviecat.checked = checked;
        }
        if (moviecat.checked) {
          selectedGenres.push(moviecat.id);
        }
      });
    }
    this.selectedGenres.emit(selectedGenres);
  }
  

  onCloseSidebar() {
    this.closeSidebar.emit();
  }


  

}
