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

  movie : string = "";

  public showStar : boolean = false;

  constructor(private _betaservice : BetaSerieService){}

  ngOnInit() : void{
  }

  toggleIsShowStar() : void{
    this.showStar = !this.showStar;
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
