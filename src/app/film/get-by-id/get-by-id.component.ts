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

  public img : string;

  public imgBeta : string;

  public movie : Movie;

  public imgApi : ImgApi[] = [];

  constructor(

    private _route : ActivatedRoute,
    private _filmService : FilmService,
    private _router : Router,
    private _imgApi : ImgApiService,
    private _betaService : BetaSerieService
  ){}

  ngOnInit(): void {

    const id: number = +this._route.snapshot.paramMap.get('id')!;


    this._imgApi.getAll().subscribe({
      next : (res) => {

        this.imgApi = res;
        let idImage =  this.imgApi.find(i => i.Id_Film == id)
        //console.log(idImage);

        // this._imgApi.getById(id).subscribe({
        //   next : (res) => {
        //     console.log(res);
        //   }
        // })
        // for(let index of this.imgApi){
        //   console.log(index.Id_Film);
        //   if(index.Id_Film== id){
        //     console.log();
        //   }
        // }
      }
    })

    this._filmService.getById(id).subscribe({
      next : (res) => {
        this.film = res;
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


