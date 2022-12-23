import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Film } from 'src/app/models/films-models';
import { FilmService } from 'src/app/service/film.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-film-update',
  templateUrl: './film-update.component.html',
  styleUrls: ['./film-update.component.scss'],
  providers: [DatePipe]
})
export class FilmUpdateComponent implements OnInit{

  public updateMovieForm : FormGroup;
  public film? : Film;
  public filmId: any;

  constructor(private _activeroute : ActivatedRoute, 
              private _filmService : FilmService,
              private _fb : FormBuilder,
              private _router : Router,
              private _datePipe : DatePipe)
              {
    this.updateMovieForm = _fb.group({
      id : [null],
      titre : [null],
      dateSortie : [null],
      duree : [null],
      origine : [null],
      synopsis_film : [null]  
  })   
}
  ngOnInit(): void {      

    this.filmId = +this._activeroute.snapshot.params['id'];
    if(this.filmId == undefined){
      return
    }
      
    this._filmService.getById(this.filmId).subscribe({ 
      next : (res) => {
        console.log("Oninit",res);        
        this.film = res;
        this.updateMovieForm.patchValue({
          id : this.film.id,
          titre : this.film.titre,
          dateSortie : this._datePipe.transform(this.updateMovieForm.get('dateSortie')?.value, 'dd/mm/yyyy'),
          duree : this.film.duree,
          origine : this.film.origine,
          synopsis_Film : this.film.synopsis_Film
        })
      }
    })
  }

  updateFilm(){    
    console.log("update :", this.updateMovieForm.value);    
    if(this.updateMovieForm.valid){
      let updateFilm : Film = this.updateMovieForm.value;
      this._filmService.updateMovie(updateFilm).subscribe({
        next : (res)=> {
          this._router.navigateByUrl('/');
        }
      })             
    }else{
      this.updateMovieForm.markAllAsTouched();      
    }
  }
}
