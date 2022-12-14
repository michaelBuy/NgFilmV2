import { Component, OnInit } from '@angular/core';
import { Film } from '../models/films-models';
import { FilmService } from '../service/film.service';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent implements OnInit{

  films : Film[] = [];

  codesPays : any[] = [
    { code : "BE", pays : "Belgique"},
    { code : "FR", pays : "France"},
    { code : "IT", pays : "Italie"},
    { code : "US", pays : "Etats-Unis"},
    { code : "MA", pays : "Maroc"}
  ];

  constructor(private _filmService : FilmService){}

  ngOnInit(): void{
  }

  getAll(){
    this._filmService.getAll().subscribe({
      next : (res) => {
        console.log(res)
        this.films = res
      },
      error : () => {},
      complete : () => {}
    })
  }

}
