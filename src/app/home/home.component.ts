import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/betaSerie';
import { BetaSerieService } from '../service/beta-serie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  movieSearch : Movie[] = [];

  idMovie? : string;

  movie : string = "";

  public showStar : boolean = true;

  constructor(private _betaservice : BetaSerieService){}

  ngOnInit() : void{       
  }  
  
  toggleIsShowStar(entity : Movie) : void{      
    this.showStar = !this.showStar;    
    this.idMovie = <string>entity.id;
    console.log(this.idMovie);
    // this.idMovie = <string>entity.id; 
    // this.getMovieById(this.idMovie);            
  }
  
  getMovieById(id : string) : void{
    this._betaservice.getMovieById(id).subscribe({
      next : (res) => {
        this.movieSearch = res['movies'];                    
      }
    })
  }

  searchMovie(search : string){
    this._betaservice.searchMovie(search).subscribe({
      next : (res) => {
        this.movieSearch = res['movies'];
        console.log(this.movieSearch);
      }
    })
  }
}
