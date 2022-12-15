import { Component } from '@angular/core';
import { Beta } from '../models/betaSerie';
import { BetaSerieService } from '../service/beta-serie.service';

@Component({
  selector: 'app-betaserie',
  templateUrl: './betaserie.component.html',
  styleUrls: ['./betaserie.component.scss']
})
export class BetaserieComponent {

  title = "BetaSerie"

  betas : Beta [] = [];

  constructor(private _betaserieService : BetaSerieService){}

  ngOnInit() : void{
  }

  poularity(){
    this._betaserieService.getPopularity().subscribe({
      next : (res) => {
        console.log(res);
        this.betas = res 
      },
      error : () => {},
      complete : () => {}
    })
  } 
}
