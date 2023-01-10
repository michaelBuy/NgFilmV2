import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from 'src/app/models/betaSerie';
import { Character } from 'src/app/models/character';
import { BetaSerieService } from 'src/app/service/beta-serie.service';

export type CharacterWithPicture = Character & { img: string }
@Component({
  selector: 'app-list-acteur',
  templateUrl: './list-acteur.component.html',
  styleUrls: ['./list-acteur.component.scss']
})
export class ListActeurComponent implements OnInit{

  public character : any[] = [];
  public characterPicture : Character[] = [];
  public film : Movie = <Movie>{};

  constructor(
    private route : ActivatedRoute,
    private _betaService : BetaSerieService,
    private _router : Router
  ){}

  ngOnInit(): void {
    const id: number = +this.route.snapshot.paramMap.get('id')!;

    this.getCharacter(id);

    this._betaService.getMovieById(id).subscribe({
      next : (res) => {
        this.film = res['movie']
      }
    })
  }

  getPicture(id : number){
    this._betaService.getPictureCharacter(id).subscribe({
      next : (res) => {
        this.characterPicture = res['characters']
        console.log(this.characterPicture);

      }
    });
  }

  getCharacter(id : number){
    this._betaService.getCharactersMovie(id).subscribe({
      next : (res) => {
        this.character = res['characters'];

        this.character = this.character.map(c => ({...c, img: `https://api.betaseries.com/pictures/persons?id=${c.person_id}&key=35d66b75531a`}))
        // this.character.splice(0,5).map((c) => c['img'] = `https://api.betaseries.com/pictures/persons?id=${c.person_id}&key=35d66b75531a`)

        console.log(this.character);
      }
    })
  }

  getName(id : number){
    this._betaService.getMovieById(id).subscribe({
      next : (res) => {
        this.film = res['movies']
      }
    })
  }

  back(){
    this._router.navigate(['/film']);
  }

}
