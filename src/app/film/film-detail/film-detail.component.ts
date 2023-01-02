import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BetaSerieService } from 'src/app/service/beta-serie.service';
import { Movie } from 'src/app/models/betaSerie';
import { FilmService } from 'src/app/service/film.service';
import { Film } from 'src/app/models/films-models';

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
  public filmRenvoiListe : Film;  
  public filmTransit : Film;

  constructor(
    private route : ActivatedRoute,
    private _filmDetailService : BetaSerieService,
    private _router : Router,
    private _betaservice : BetaSerieService,
    private _filmService : FilmService,
      
  ){}

  ngOnInit(): void {
    const id: number = +this.route.snapshot.paramMap.get('id')!;  
    this._filmDetailService.getMovieById(id).subscribe({
      next : (res) => {
        this.film = res['movie']    
        // console.log(this.film);                   
      }
    })      
  }

  toggleIsShowStar(){      
      this.showStar = !this.showStar;  
      if(this.showStar){
        this.film.favori = true;
      } else {
        this.film.favori = false;
      }
  } 
  
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
  }  

  addFavori( entity : any){
    if(entity != undefined){
              
    
      let x : Film = <Film>{};
      x = new Film(
        this.filmRenvoiListe.id = entity.id,
        this.filmRenvoiListe.titre = entity.title,
        this.filmRenvoiListe.dateSortie = entity.release_date,
        this.filmRenvoiListe.duree = "aucune information",
        this.filmRenvoiListe.origine = entity.language,
        this.filmRenvoiListe.synopsis_Film = entity.synopsis
      )
    }
           
    
      
    // this._filmService.addMovie(x);       
  }
}
