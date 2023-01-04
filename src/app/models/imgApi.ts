
export class ImgApi {
  id : number;
  Id_Film : number;
  Id_Beta : number;

  constructor(
    id : number,
    Id_Film : number,
    id_Beta : number
  ) {
    this.id = id;
    this.Id_Film = Id_Film;
    this.Id_Beta = id_Beta;
  }
}
