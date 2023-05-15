import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { mergeMap, switchMap, toArray } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http:HttpClient) { }

  apiKey: string = 'f6258165de4f1ffb5f5b235dc73089a7';
  baseUrl: string = 'https://api.themoviedb.org/3';
  
  
  getMovies(option:any,page:number = 3){
    return this.http.get(`${this.baseUrl}/movie/${option}?page=${page}&api_key=${this.apiKey}`);
  }

  getOnlyMovie(movie_id:number) {
    return this.http.get(`${this.baseUrl}/movie/${movie_id}?api_key=${this.apiKey}`)
  }

  getSimilarMovies(id:number){
    return this.http.get(`${this.baseUrl}/movie/${id}/similar?api_key=${this.apiKey}`);
  }

  getActors(id:number){
    return this.http.get(`${this.baseUrl}/movie/${id}/credits?api_key=${this.apiKey}`);
  }
  
  getImages(){}


  getVideos(id:number,count : number){
    return this
    .http
    .get(`${this.baseUrl}/movie/${id}/videos?api_key=${this.apiKey}`)
    .pipe(switchMap((res:any) => of(res.results.splice(0,count)))); // an observable(of)*/
  }

  SearchMovie(query:string,page:number=1){
    return this.http.get(`${this.baseUrl}/search/movie?query=${query}&page=${page}&api_key=${this.apiKey}`);
  }

  getTvShows(page:number){
    return this.http.get(`${this.baseUrl}/tv/popular?page=${page}&api_key=${this.apiKey}`);
  }

  getOnlyTv(id:number) {
    return this.http.get(`${this.baseUrl}/tv/${id}?api_key=${this.apiKey}`)
  }

  getSeasons(id:number):Observable<any[]>{
    const tvShowUrl = `${this.baseUrl}/tv/${id}?api_key=${this.apiKey}`;
  
    return this.http.get(tvShowUrl).pipe(
      mergeMap((tvShow: any) => {
        const numberOfSeasons = tvShow.number_of_seasons;
        const seasonUrls = [];

        for (let i = 1; i <= numberOfSeasons; i++) {
          const seasonUrl = `${this.baseUrl}/tv/${id}/season/${i}?api_key=${this.apiKey}`;
          seasonUrls.push(seasonUrl);
        }

        return seasonUrls;
      }),
      mergeMap((seasonUrl: string) => this.http.get(seasonUrl)),
      toArray()
    );
  }
  

  getAnyGenres(option:string){
    return this.http.get(`${this.baseUrl}/genre/${option}/list?api_key=${this.apiKey}`);
  }

  getTrending(){
    return this.http.get(`${this.baseUrl}/trending/all/day?page=3&api_key=${this.apiKey}`)
  }
}
