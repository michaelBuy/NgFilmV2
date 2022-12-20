import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Data } from '@angular/router';
import { catchError, Observable, throwError, tap } from 'rxjs';



@Injectable({
  providedIn: 'root'
})

export class BetaSerieService {

  private readonly _url_film = "https://api.betaseries.com/movies/"; 
  private readonly _order = "list?order=popularity";
  private readonly _random = "random?";
  private readonly _getMovieById = "https://api.betaseries.com/movies/movie?id=";
  private readonly _query = "https://api.betaseries.com/search/movies?text="
  private readonly _key = "&key=35d66b75531a";

  //https://api.betaseries.com/shows/display?id=58628&key=35d66b75531a
  //https://api.betaseries.com/movies/movie?id=58628&key=35d66b75531a


  constructor(private _httpClient : HttpClient) { }

  getMovieById(id : number) : Observable<Data>{
    return this._httpClient.get<Data>(`${this._getMovieById}${id}${this._key}`).pipe(
      tap(Data => console.log('Data id: ', Data)), 
      catchError(this.handleError)
    );    
  }

  getPopularity() : Observable<Data>{
    return this._httpClient.get<Data>(`${this._url_film}${this._order}${this._key}`).pipe(
      tap(Data => console.log('Data popularity: ', Data)), 
      catchError(this.handleError)
    );
  }

  getRandomMovie() : Observable<Data>{
    return this._httpClient.get<Data>(`${this._url_film}${this._random}${this._key}`).pipe(
      tap(Data => console.log('Data: ', Data)), 
      catchError(this.handleError)
    );
  }

  searchMovie(search : string) : Observable<Data>{
    return this._httpClient.get<Data>(`${this._query}${search}${this._key}`).pipe(
      tap(Data => console.log('Data: ', Data)), 
      catchError(this.handleError)
    );
  }

  private handleError(err : HttpErrorResponse){
    if(err.error instanceof ErrorEvent){
      console.error('An error occured.', err.error.message);
    } else{
      console.error(
        'Backend return code $(error.status), body was: ${err.error}'
      );
    }
    return throwError('Something bad happened: please try again later.');
  }
}



