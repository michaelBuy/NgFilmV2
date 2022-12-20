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
  movieById : Movie[] = [];
  idMovie? : number;
  movie : string = "";
  public showStar : boolean = true;
  public receiveRating? : string;
  public errMsg?: string; 

  constructor(private _betaservice : BetaSerieService){}

  ngOnInit() : void{      
  }  

  ngOnChanges() : void {         
  }
  
  toggleIsShowStar(entity : Movie){  
    if(entity.id != null){
      this.showStar = !this.showStar; 
    }      
    this.idMovie = entity.id; 
    this.getMovieById(this.idMovie!)                                                                                                                                                                                                                               
  };  
  
  getMovieById(id : number){
    this._betaservice.getMovieById(id).subscribe({
      next : (res) => {
        this.movieById = res['movie']; 
        console.log(this.movieById);                                          
      }
    })
  }

  searchMovie(search : string){
    this._betaservice.searchMovie(search).subscribe({
      next : (res) => {
        this.movieSearch = res['movies'];
        console.log(this.movieSearch);
      },
      error : (err) => { this.errMsg = err},
      complete : () => {}
    })
  }

  public receiveRatingClicked(message : string) : void{
    this.receiveRating = message
  }
}
