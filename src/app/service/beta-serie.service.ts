import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Data } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class BetaSerieService {

  private _url_film = "https://api.betaseries.com/movies/";
  private _order = "list?order=popularity";
  private _random = "random?";
  private _query = "https://api.betaseries.com/search/movies?text="
  private _key = "&key=35d66b75531a";
  //"https://api.betaseries.com/movies/search/all?query=godfather&key=35d66b75531a"
  //"https://api.betaseries.com/search/movies?text=godfather&key=35d66b75531a"

  constructor(private _httpClient : HttpClient) { }

  getPopularity() : Observable<Data>{
    return this._httpClient.get<Data>(`${this._url_film}${this._order}${this._key}`);
  }

  getRandomMovie() : Observable<Data>{
    return this._httpClient.get<Data>(`${this._url_film}${this._random}${this._key}`);
  }

  searchMovie(search : string) : Observable<Data>{
    return this._httpClient.get<Data>(`${this._query}${search}${this._key}`);
  }
}



