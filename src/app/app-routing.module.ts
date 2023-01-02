import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BetaserieComponent } from './betaserie/betaserie.component';
import { FilmAddComponent } from './film/film-add/film-add.component';
import { FilmDetailComponent } from './film/film-detail/film-detail.component';
import { FilmUpdateComponent } from './film/film-update/film-update.component';
import { FilmComponent } from './film/film.component';
import { GetByIdComponent } from './film/get-by-id/get-by-id.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path : "", component : HomeComponent },
  { path : "home", component : HomeComponent},
  { path : "login", component : LoginComponent },
  { path : "register", component : RegisterComponent },
  { path : "film", component : FilmComponent},
  { path : "film_add", component : FilmAddComponent},
  { path : "update_movie/:id", component : FilmUpdateComponent},
  { path : "betaserie", component : BetaserieComponent},
  { path : "film/:id", component : FilmDetailComponent},
  { path : "favorite/:id", component : GetByIdComponent},
  { path : "**", component : HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
