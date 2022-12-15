import { Component, OnInit } from '@angular/core';
import { Film } from '../models/films-models';
import { FilmService } from '../service/film.service';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent implements OnInit{

  titre = "Ma sélection :"

  films : Film[] = [];

  constructor(private _filmService : FilmService){}

  ngOnInit(): void{
    this._filmService.getAll().subscribe({
      next : (res) => {   
        console.log(res);             
        this.films = res
      },
      error : () => {},
      complete : () => {}
    })
  }

 

}
