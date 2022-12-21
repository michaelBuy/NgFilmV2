  export interface Movie{
    id? : number;
    title? : string;
    poster? : string;
    tmdb_id? : string;
    imdb_id? : string;
    followers? : string;
    production_year? : string;
    synopsis? : string;
    notes : number;
    genres : string;
    backdrop : string;

    // constructor(
    //     id : string,
    //     title : string,
    //     poster : string,
    //     tmdb_id : string,
    //     imdb_id : string,
    //     followers : string,
    //     production_year : string
    // ){
    //     this.id = id;
    //     this.title = title;
    //     this.poster = poster;
    //     this.tmdb_id = tmdb_id;
    //     this.imdb_id = imdb_id;
    //     this.followers = followers;
    //     this.production_year = production_year;
    // }
}
