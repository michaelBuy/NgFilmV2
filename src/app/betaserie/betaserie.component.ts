import { Component } from '@angular/core';
import { Movie } from '../models/betaSerie';
import { BetaSerieService } from '../service/beta-serie.service';

@Component({
  selector: 'app-betaserie',
  templateUrl: './betaserie.component.html',
  styleUrls: ['./betaserie.component.scss']
})
export class BetaserieComponent {

  title = "BetaSerie";

  public showBadge : boolean = false;

  betas: Movie[] = [];

  beta_rnd: Movie[] = [];

  public _betaserieFilter = 'Film';

  public filteredBetaserie : Movie[] = [];

  constructor(private _betaserieService : BetaSerieService){}

  ngOnInit() : void{
     this._betaserieService.getPopularity().subscribe({
      next : (res) => {
        this.betas = res['movies'];
        //console.log("inside" + this.betas)
      },
    })
    // a checker tuto 19
     this.filteredBetaserie = this.betas;
    // console.log(" test " + this.betas);
  }

  public get betaFilter() : string{
    return this._betaserieFilter
  }

  public set betaFilter(filter : string){
    this._betaserieFilter = filter;

    this.filteredBetaserie = this.betaFilter ? this.filterBetaseries(this.betaFilter) : this.betas
  }

  public toggleisNewBadge() : void  {
    this.showBadge = !this.showBadge;
  }

  public filterBetaseries(criteria : string) : Movie[]{
    criteria = criteria.toLocaleLowerCase();
    const res = this.betas.filter(
      (beta: Movie) => beta.title?.toLocaleLowerCase().indexOf(criteria)!= -1
    );
    return res;
  }

  poularity(){
    this._betaserieService.getPopularity().subscribe({
      next : (res) => {
        this.betas = res['movies'];
        // console.log(this.betas)
      },
    })
  }

  random(){
    this._betaserieService.getRandomMovie().subscribe({
      next : (res) => {
        this.beta_rnd = res['movies'];
        // console.log(res);
      },
      error : () => {},
      complete : () => {}
    })
  }
}
