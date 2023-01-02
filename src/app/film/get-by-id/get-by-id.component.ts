import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from 'src/app/models/betaSerie';
import { Film } from 'src/app/models/films-models';
import { BetaSerieService } from 'src/app/service/beta-serie.service';
import { FilmService } from 'src/app/service/film.service';

@Component({
  selector: 'app-get-by-id',
  templateUrl: './get-by-id.component.html',
  styleUrls: ['./get-by-id.component.scss']
})
export class GetByIdComponent implements OnInit{

  public film : Film;
  public showStar : boolean;
  public img : string;
  public imgBeta : string;
  public movieSearch : Movie;

  constructor(
    private _route : ActivatedRoute,
    private _filmService : FilmService,
    private _router : Router,
    private _beta : BetaSerieService
  ){}

  ngOnInit(): void {
    const id: number = +this._route.snapshot.paramMap.get('id')!;
    this._beta.getMovieById(id).subscribe({
      next : (res) => {
        console.log(res)
        this.movieSearch =  res['movie'];
      }
    })

    this._filmService.getById(id).subscribe({
      next : (res) => {
        this.film = res;
      }
    })
  }

  showImage(id : number) : string{
    if(id>= 1 || id<5){
      return this.img = `../assets/img/${id}.jpg`
    }else{
      return this.movieSearch.poster!
    }
  }

  RemoveFavori(id : number){
    this.showStar = !this.showStar;
    this._filmService.deleteMovie(id).subscribe();
    this.backToList();
  }

  backToList(){
    this._router.navigate(['/film']);
  }
}


