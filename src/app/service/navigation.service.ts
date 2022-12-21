import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  private _history : string[] = [];

  constructor(private _router : Router, 
              private _Location : Location) { }

  public starSaveHistory() : void{
    this._router.events.subscribe((event) => {
      if(event instanceof NavigationEnd){
        this._history.push(event.urlAfterRedirects)
      }
    })
  }

  public getHistory() : string[]{
    return this._history;
  }

  public goBack() : void {
    this._history.pop();
    if(this._history.length > 0){
      this._Location.back()
    } else {
      this._router.navigateByUrl("/")
    }    
  }

  public getPreviousUrl() : string {
      if(this._history.length > 0){
        return this._history[this._history.length -2];
      }
      return "";
  }

}
