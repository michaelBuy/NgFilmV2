import { Component } from '@angular/core';
import { Movie } from '../models/betaSerie';
import { BetaSerieService } from '../service/beta-serie.service';

@Component({
  selector: 'app-betaserie',
  templateUrl: './betaserie.component.html',
  styleUrls: ['./betaserie.component.scss']
})
export class BetaserieComponent {

  title = "BetaSerie"

  betas: Movie[] = []
  beta_rnd: Movie[] = []
  constructor(private _betaserieService : BetaSerieService){}

  ngOnInit() : void{
    this._betaserieService.getPopularity().subscribe({
      next : (res) => {
        this.betas = res['movies'];
        console.log(this.betas)
      },
    })
  }

  // poularity(){
  //   this._betaserieService.getPopularity().subscribe({
  //     next : (res) => {
  //       this.betas = res['movies'];
  //       console.log(this.betas)
  //     },
  //   })
  // }

  random(){

    this._betaserieService.getRandomMovie().subscribe({
      next : (res) => {
        this.beta_rnd = res['movies'];
        console.log(res);

      },
      error : () => {},
      complete : () => {}
    })
  }
}
