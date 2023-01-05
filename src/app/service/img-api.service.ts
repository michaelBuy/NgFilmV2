import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ImgApi } from '../models/imgApi';

@Injectable({
  providedIn: 'root'
})
export class ImgApiService {

  private _url : string =  "https://localhost:7018/api/";

  constructor(private _httpClient : HttpClient) { }

  getAll() : Observable<ImgApi[]>{
    return this._httpClient.get<ImgApi[]>(`${this._url}imgApi_`)
  }

  getById(id: number) : Observable<ImgApi>{
    return this._httpClient.get<ImgApi>(`${this._url}imgApi_/${id}`)
  }

  add(img : ImgApi) : Observable<ImgApi>{
    return this._httpClient.post<ImgApi>(`${this._url}imgApi_`, img)
  }

  update(img : ImgApi) : Observable<ImgApi>{
    return this._httpClient.put<ImgApi>(`${this._url}imgApi_`, img)
  }

  delete(id : number){
    return this._httpClient.delete(`${this._url}imgApi_?id=${id}`)
  }
}
