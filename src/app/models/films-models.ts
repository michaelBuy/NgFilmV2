export class Film {
  id: number;
  titre: string;
  dateSortie: Date;
  Duree: string;
  Origine: string;
  Synopsis_film: string;    

  constructor(
    id: number,
    titre: string,
    dateSortie: Date,
    Duree: string,
    Origine: string,
    Synopsis_film: string    
    
  ) {
    this.id = id;
    this.titre = titre;
    this.dateSortie = dateSortie;
    this.Duree = Duree;
    this.Origine = Origine;
    this.Synopsis_film = Synopsis_film;        
  }
}
