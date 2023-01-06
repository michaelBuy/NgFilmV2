import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { Movie } from 'src/app/models/betaSerie';
import { Film } from 'src/app/models/films-models';
import { ImgApi } from 'src/app/models/imgApi';
import { BetaSerieService } from 'src/app/service/beta-serie.service';
import { FilmService } from 'src/app/service/film.service';
import { ImgApiService } from 'src/app/service/img-api.service';


@Component({
  selector: 'app-get-by-id',
  templateUrl: './get-by-id.component.html',
  styleUrls: ['./get-by-id.component.scss']
})
export class GetByIdComponent implements OnInit{

  public film : Film;

  public showStar : boolean;

  public imgBeta : ImgApi;

  public filmAfficher : Movie = <Movie>{};

  public img : string;

  public movie : Movie;

  public idBeta : number

  public movieById : Movie[] = [];

  constructor(

    private _route : ActivatedRoute,
    private _filmService : FilmService,
    private _router : Router,
    private _imgApi : ImgApiService,
    private _betaService : BetaSerieService
  ){}

  ngOnInit(): void {

    const id: number = +this._route.snapshot.paramMap.get('id')!;

    if(id > 4){
      forkJoin([
        this._filmService.getById(id),
        this._imgApi.getById(id)
      ]).subscribe(([film, img]) => {
        console.log(film, img);
        const idFilm = (img as any).id_Film;
        this.film = film;
        this.imgBeta = img;
        this.idBeta = idFilm;
        this._betaService.getMovieById(this.idBeta).subscribe(({movie}) => this.filmAfficher = movie);
      })
    } else {
      this._filmService.getById(id).subscribe({
        next : (res) => {
          this.film = res
        }
      })
    }
  }

  getMovieById(id : number){
    this._betaService.getMovieById(id).subscribe({
      next : (res) => {
        this.movieById = res['movie'];
      }
    })
  }

  showImage(id : number): string{
    if(id >=0 && id < 5){
      return this.img = `assets/img/${id}.jpg`
    }
      return ""
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


