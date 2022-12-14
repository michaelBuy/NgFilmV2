import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Film } from '../models/films-models';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  private _url : string =  "https://localhost:7018/api/";

  constructor(private _httpClient : HttpClient) { }

  getAll() : Observable<Film[]>{
    return this._httpClient.get<Film[]>(`${this._url}Film_`)
  }
}
