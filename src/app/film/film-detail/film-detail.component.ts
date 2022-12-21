import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BetaSerieService } from 'src/app/service/beta-serie.service';
import { Movie } from 'src/app/models/betaSerie';
import { Location } from '@angular/common';
import { NavigationService } from 'src/app/service/navigation.service';

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.scss']
})
export class FilmDetailComponent implements OnInit{

  public film : Movie = <Movie>{};
  public showStar : boolean = true;
  public idMovie? : number;
  public movieById : Movie[] = [];

  constructor(
    private route : ActivatedRoute,
    private _filmDetailService : BetaSerieService,
    private _router : Router,
    private _betaservice : BetaSerieService    
  ){ }

  ngOnInit(): void {
    const id: number = +this.route.snapshot.paramMap.get('id')!;  
    this._filmDetailService.getMovieById(id).subscribe({
      next : (res) => {
        this.film = res['movie']    
        console.log(this.film);                   
      }
    })      
  }

  toggleIsShowStar(entity : Movie){  
    if(entity.id != null){
      this.showStar = !this.showStar; 
    }      
    this.idMovie = entity.id; 
    this.getMovieById(this.idMovie!)                                                                                                                                                                                                                               
  };  

// récupere par id
  getMovieById(id : number){
    this._betaservice.getMovieById(id).subscribe({
      next : (res) => {
        this.movieById = res['movie'];                                                  
      }
    })
  }

  backToList(){
    this._router.navigate(['/home']);
    // this._navigation.goBack();
  }
}
