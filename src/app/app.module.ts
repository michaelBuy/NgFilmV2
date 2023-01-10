import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FilmComponent } from './film/film.component';
import { HttpClientModule } from '@angular/common/http';
import { BetaserieComponent } from './betaserie/betaserie.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReplaceCommaPipe } from './shared/pipe/replace-comma.pipe';
import { StarRatingComponent } from './shared/components/star-rating/star-rating/star-rating.component';
import { FilmDetailComponent } from './film/film-detail/film-detail.component';
import { FilmAddComponent } from './film/film-add/film-add.component';
import { FilmUpdateComponent } from './film/film-update/film-update.component';
import { GetByIdComponent } from './film/get-by-id/get-by-id.component';
import { ListActeurComponent } from './acteur/list-acteur/list-acteur.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    FilmComponent,
    BetaserieComponent,
    ReplaceCommaPipe,
    StarRatingComponent,
    FilmDetailComponent,
    FilmAddComponent,
    FilmUpdateComponent,
    GetByIdComponent,
    ListActeurComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
