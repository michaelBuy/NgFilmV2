import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Film } from 'src/app/models/films-models';
import { FilmService } from 'src/app/service/film.service';


@Component({
  selector: 'app-film-add',
  templateUrl: './film-add.component.html',
  styleUrls: ['./film-add.component.scss']
})
export class FilmAddComponent implements OnInit {

  registerMovie : FormGroup;

  constructor(private _fb : FormBuilder,
              private _filmService : FilmService){

    this.registerMovie = _fb.group({
      titre : [null, [Validators.required]],
      dateSortie : [null, ],
      Duree : [null, ],
      Origine : [null, [Validators.required]],
      Synopsis_film : [null,]          
    })
  }

  ngOnInit(){
  }

  addMovie() : void {
    console.log("fonctionne");
    
    if(this.registerMovie.valid){
      console.log(this.registerMovie.valid);
      let registerMovie : Film = this.registerMovie.value;
      this._filmService.addMovie(registerMovie);
      console.log("valid");
      
    }
    else {
      this.registerMovie.markAllAsTouched();
      console.log(" non valid");
    }
  }
}
