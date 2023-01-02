import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BetaSerieService } from 'src/app/service/beta-serie.service';
import { Movie } from 'src/app/models/betaSerie';
import { FilmService } from 'src/app/service/film.service';
import { Film } from 'src/app/models/films-models';

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.scss']
})
export class FilmDetailComponent implements OnInit{

  public film : Movie = <Movie>{};
  public showStar : boolean = true;
  public idMovie? : number;
  public movieById : Movie[] = [];
  public filmRenvoiListe : Film;
  public filmTransit : Film;

  constructor(
    private route : ActivatedRoute,
    private _filmDetailService : BetaSerieService,
    private _router : Router,
    private _betaservice : BetaSerieService,
    private _filmService : FilmService,
  ){}

  ngOnInit(): void {
    const id: number = +this.route.snapshot.paramMap.get('id')!;
    this._filmDetailService.getMovieById(id).subscribe({
      next : (res) => {
        this.film = res['movie']
      }
    })
  }

  toggleIsShowStar(){
      this.showStar = !this.showStar;
      if(this.showStar){
        this.film.favori = true;
      } else {
        this.film.favori = false;
      }
  }

  // récupere par id
  getMovieById(id : number){
    this._betaservice.getMovieById(id).subscribe({
      next : (res) => {
        this.movieById = res['movie'];
      }
    })
  }


  backToList(){
    this._router.navigate(['/home']);
  }

  addFavori(entity : Movie){
    if(entity != null){
      this.filmRenvoiListe = new Film(entity.id,
                                      entity.title!,
                                      entity.release_date,
                                      "aucune info",
                                      entity.language,
                                      entity.synopsis!)
      this._filmService.addMovie(this.filmRenvoiListe).subscribe();
      this.toggleIsShowStar();
    }
  }
}
