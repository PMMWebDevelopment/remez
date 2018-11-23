import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';

import * as firebase from "firebase/app";
import { environment } from "./../environments/environment";
import { AngularFireModule } from "@angular/fire";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { WritingService } from "./services/writing.service";
import { GrammarService } from "./services/grammar.service";

import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { WritingComponent } from './writing/writing.component';
import { GrammarComponent } from './grammar/grammar.component';
import { LetterComponent } from './writing/letter/letter.component';
import { GrammarPointComponent } from './grammar/grammar-point/grammar-point.component';
import { ResourcesComponent } from './resources/resources.component';
import { VerbsComponent } from './resources/verbs/verbs.component';
import { PresentTenseComponent } from './resources/verbs/present-tense/present-tense.component';
import { PastTenseComponent } from './resources/verbs/past-tense/past-tense.component';
import { FutureTenseComponent } from './resources/verbs/future-tense/future-tense.component';
import { ImperativesComponent } from './resources/verbs/imperatives/imperatives.component';
import { ParticiplesComponent } from './resources/verbs/participles/participles.component';
import { OtherFormsComponent } from './resources/verbs/other-forms/other-forms.component';
import { CountriesComponent } from './resources/countries/countries.component';
import { ColoursComponent } from './resources/colours/colours.component';
import { SportsComponent } from './resources/sports/sports.component';
import { TimeComponent } from './resources/time/time.component';
import { WeatherComponent } from './resources/weather/weather.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    WritingComponent,
    GrammarComponent,
    LetterComponent,
    GrammarPointComponent,
    ResourcesComponent,
    VerbsComponent,
    PresentTenseComponent,
    PastTenseComponent,
    FutureTenseComponent,
    ImperativesComponent,
    ParticiplesComponent,
    OtherFormsComponent,
    CountriesComponent,
    ColoursComponent,
    SportsComponent,
    TimeComponent,
    WeatherComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [WritingService, GrammarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
