import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Data } from '@angular/router';
import { Observable } from 'rxjs';
import { Movie } from '../models/betaSerie';

@Injectable({
  providedIn: 'root'
})

export class BetaSerieService {

  private _url_film = "https://api.betaseries.com/movies/";
  private _order = "list?order=popularity";
  private _random = "random?";
  private _getMovieById = "https://api.betaseries.com/movies/movie?id=";
  private _query = "https://api.betaseries.com/search/movies?text="
  private _key = "&key=35d66b75531a";

  //https://api.betaseries.com/shows/display?id=58628&key=35d66b75531a
  //https://api.betaseries.com/movies/movie?id=58628&key=35d66b75531a


  constructor(private _httpClient : HttpClient) { }

  getMovieById(id : string) : Observable<Data>{
    return this._httpClient.get<Data>(`${this._getMovieById}${id}${this._key}`);
  }

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



