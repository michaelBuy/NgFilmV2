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
  movie : string = "";
  public receiveRating? : string;
  public errMsg?: string;

  constructor(private _betaservice : BetaSerieService){}

  ngOnInit() : void{
  }

  ngOnChanges() : void {
  }

  // Recherche par nom
  searchMovie(search : string){
    this._betaservice.searchMovie(search).subscribe({
      next : (res) => {
        this.movieSearch = res['movies'];
      },
      error : (err) => { this.errMsg = err},
      complete : () => {}
    })
  }

  public receiveRatingClicked(message : string) : void{
    this.receiveRating = message
  }
}
