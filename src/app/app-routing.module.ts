import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BetaserieComponent } from './betaserie/betaserie.component';
import { FilmComponent } from './film/film.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path : "", component : HomeComponent },
  { path : "home", component : HomeComponent },
  { path : "login", component : LoginComponent },
  { path : "register", component : RegisterComponent },
  { path : "film", component : FilmComponent},
  { path : "betaserie", component : BetaserieComponent},
  { path : "**", component : HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
