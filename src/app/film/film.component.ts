import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/betaSerie';
import { Film } from '../models/films-models';
import { FilmService } from '../service/film.service';
import { ImgApiService } from '../service/img-api.service';
import { forkJoin } from 'rxjs';
import { ImgApi } from '../models/imgApi';
import { BetaSerieService } from '../service/beta-serie.service';
import { Router } from '@angular/router';
import { Character } from '../models/character';
import { ThisReceiver } from '@angular/compiler';

type FilmWithPoster = Film & { poster: string }
@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent implements OnInit{

  titre = "Ma sélection :"

  films : FilmWithPoster[] = [];

  character : Character[] = [];

  filmDb : Film[] = [];

  public img : string;

  public imgBeta : ImgApi[] = [];

  public filmAfficher : Movie = <Movie>{};

  public movie : Movie;

  public idBeta : number;

  constructor(private _filmService : FilmService,
              private _imgApi : ImgApiService,
              private _betaService : BetaSerieService,
              private _router :Router){}

  ngOnInit(): void{
    this._filmService.getAll().subscribe({
      next : (res) => {
        this.filmDb = res
        console.log(res);

      },
      error : () => {},
      complete : () => {}
    })

    forkJoin([
      this._filmService.getAll(),
      this._imgApi.getAll()
    ]).subscribe(([films, imgs]) => {

      const movies: FilmWithPoster[] = films.map((it: Film) => ({...it, poster: ""} as FilmWithPoster));
      movies.forEach(movie => {
        const imgApi: any = imgs.find((it: any) => it.id_Film == movie.id )
        if (imgApi.id_Beta == 0) return;
        this._betaService.getMovieById(imgApi.id_Beta).subscribe((data:any) => {
          movie.poster = data.movie.poster;
          this.films?.push(movie)
        })
      })
    })
  }

  getCharacter(id : number){
    this._betaService.getCharactersMovie(id).subscribe({
      next : (res) => {
        console.log(res);
        this.character.find(x => x.actor);
      }
    })
  }

  showImage(id : number): string{
    if(id >=0 && id < 5){
      return this.img = `assets/img/${id}.jpg`
    }
      return ""
  }

  delete(id : number){
    this._filmService.deleteMovie(id).subscribe({
      next : () => {
        this._filmService.getAll().subscribe({
          next : (res:any) => {
            console.log(res);

            this.films = [];
            this.films.push(...res);
            this._router.navigate(['/home']);
          }
        })
      }
    })
  }
}
