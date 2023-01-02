

export class Film {
  id: number;
  titre: string;
  dateSortie: Date;
  duree: string;
  origine: string;
  synopsis_Film: string;


  constructor(
    id: number,
    titre: string,
    dateSortie: Date,
    duree: string,
    origine: string,
    synopsis_Film: string,

  ) {
    this.id = id;
    this.titre = titre;
    this.dateSortie = dateSortie;
    this.duree = duree;
    this.origine = origine;
    this.synopsis_Film = synopsis_Film;

  }
}
