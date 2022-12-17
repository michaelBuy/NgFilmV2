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

  constructor(private _betaservice : BetaSerieService){}

  ngOnInit() : void{

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
