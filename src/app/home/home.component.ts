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

  // switch pour cocher l'étoile et l'ajouter au favori
  // En construction
  // toggleIsShowStar(entity : Movie){
  //   if(entity.id != null){
  //     this.showStar = !this.showStar;
  //   }
  //   this.idMovie = entity.id;
  //   this.getMovieById(this.idMovie!)
  // };

  // // récupere par id
  // getMovieById(id : number){
  //   this._betaservice.getMovieById(id).subscribe({
  //     next : (res) => {
  //       this.movieById = res['movie'];
  //     }
  //   })
  // }

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
