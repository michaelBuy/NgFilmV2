import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Film } from 'src/app/models/films-models';
import { FilmService } from 'src/app/service/film.service';

@Component({
  selector: 'app-film-update',
  templateUrl: './film-update.component.html',
  styleUrls: ['./film-update.component.scss']
})
export class FilmUpdateComponent implements OnInit{

  public updateMovieForm : FormGroup;
  public film? : Film;
  public filmId: any = 1;

  constructor(private _activeroute : ActivatedRoute, 
              private _filmService : FilmService,
              private _fb : FormBuilder,
              private _router : Router)
              {
    this.updateMovieForm = _fb.group({
      
      titre : [null,],
      dateSortie : [null, ],
      Duree : [null, ],
      Origine : [null, ],
      Synopsis_film : [null,]  
  })

}
  ngOnInit(): void {      

    this.filmId = this._activeroute.snapshot.params['id'];
    if(this.filmId == undefined){
      return
    }
    else{
      console.log(this.filmId);
    }    
    this._filmService.getById(this.filmId).subscribe({
      next : (res) => {
        console.log("Oninit",res);
        
        this.film = res;
        this.updateMovieForm.patchValue({
          titre : this.film.titre,
          dateSortie : this.film.dateSortie,
          Duree : this.film.duree,
          Origin : this.film.origine,
          Synopsis_film : this.film.synopsis_Film
        })
      }
    })
  }

  updateFilm() {
    if(this.updateMovieForm.valid){
      let updateFilm : Film = this.updateMovieForm.value;
      this._filmService.updateMovie(updateFilm, this.filmId) ;     
    }else{
      this.updateMovieForm.markAllAsTouched();
    }
  }
}
