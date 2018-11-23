import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WritingComponent } from './writing/writing.component';
import { LetterComponent } from './writing/letter/letter.component';
import { GrammarComponent } from './grammar/grammar.component';
import { GrammarPointComponent } from './grammar/grammar-point/grammar-point.component';
import { ResourcesComponent } from './resources/resources.component';
import { VerbsComponent } from './resources/verbs/verbs.component';
import { CountriesComponent } from './resources/countries/countries.component';
import { ColoursComponent } from './resources/colours/colours.component';
import { SportsComponent } from './resources/sports/sports.component';
import { TimeComponent } from './resources/time/time.component';
import { WeatherComponent } from './resources/weather/weather.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'writing', component: WritingComponent },
  { path: 'letter/:namelat', component: LetterComponent },
  { path: 'grammar', component: GrammarComponent },
  { path: 'grammarpoint/:display_no', component: GrammarPointComponent },
  { path: 'resources', component: ResourcesComponent },
  { path: 'verbs', component: VerbsComponent },
  { path: 'countries', component: CountriesComponent },
  { path: 'colours', component: ColoursComponent },
  { path: 'sports', component: SportsComponent },
  { path: 'time', component: TimeComponent },
  { path: 'weather', component: WeatherComponent }
];

@NgModule({
  // imports: [ RouterModule.forRoot(routes, { enableTracing: true }) ],
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]  
})
export class AppRoutingModule { }
