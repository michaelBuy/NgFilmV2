import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Beta } from '../models/betaSerie';

@Injectable({
  providedIn: 'root'
})
export class BetaSerieService {

  

  private _url_film = "https://api.betaseries.com/movies/";
  private _order = "list?order=popularity";
  private _key = "&key=35d66b75531a";  

  constructor(private _httpClient : HttpClient) { }

  getPopularity() : Observable<Beta[]>{
    return this._httpClient.get<Beta[]>(`${this._url_film}${this._order}${this._key}`)
  }	
}
