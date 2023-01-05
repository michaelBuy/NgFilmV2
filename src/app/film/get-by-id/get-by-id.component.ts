import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  public imgApi : ImgApi[] = [];

  public idTemp = new ImgApi(0, 0, 0);

  constructor(

    private _route : ActivatedRoute,
    private _filmService : FilmService,
    private _router : Router,
    private _imgApi : ImgApiService,
    private _betaService : BetaSerieService
  ){}

  ngOnInit(): void {

    const id: number = +this._route.snapshot.paramMap.get('id')!;

      this._filmService.getById(id).subscribe({
        next : (res) => {
          this.film = res;
        }
      })

     // Récupération de l'id venant des favoris
     //******************************************** */
      this.idTemp.Id_Film = id;
      console.log(this.idTemp.Id_Film);
      this._imgApi.getById(this.idTemp.Id_Film).subscribe({
        next : (res) => {
          this.imgBeta = res;
          this.idBeta = +this.imgBeta;
       }
      })

      //Récupération de l'image venant de BetaSerie
      //******************************************** */

      console.log(this.idBeta);
      this._betaService.getMovieById(this.idBeta).subscribe({
        next : (res) => {
          // this.filmAfficher = res['movie']
          // console.log(this.filmAfficher);
        }
      })
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
    } else{
      return ""
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


