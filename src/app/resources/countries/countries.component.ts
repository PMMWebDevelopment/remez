import { Component } from '@angular/core';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent {

  countries: any[];

  constructor() { 
    this.countries = [
      { heb: "ישראל", lat: "Yishrael", flag: "../../../assets/images/il.png" },
      { heb: "האיחוד האמירויות הערביות", lat: "Ha-Ichud ha-Emiroyoth ha-'Arabiyoth", flag: "../../../assets/images/ae.png" },
      { heb: "הארצות הברית", lat: "Ha-Artzoth ha-Merith", flag: "../../../assets/images/us.png" },
      { heb: "הודו", lat: "Hodu", flag: "../../../assets/images/in.png" },
      { heb: "חוף השנהב", lat: "Chof ha-Shenhav", flag: "../../../assets/images/ci.png" },
      { heb: "יון", lat: "Yavan", flag: "../../../assets/images/gr.png" },
      { heb: "ירדן", lat: "Yarden", flag: "../../../assets/images/jo.png" },
      { heb: "הממלכה המאוחדת", lat: "Ha-Mamlakhah ha-Muchadeth", flag: "../../../assets/images/gb.png" },
      { heb: "מצרים", lat: "Mitzrayim", flag: "../../../assets/images/eg.png" },
      { heb: "סין", lat: "Sin", flag: "../../../assets/images/cn.png" },
      { heb: "ספרד", lat: "Sfarad", flag: "../../../assets/images/es.png" },
      { heb: "צרפת", lat: "Tzarfat", flag: "../../../assets/images/fr.png" },
      { heb: "קפריסין", lat: "Kafrisin", flag: "../../../assets/images/cy.png" },
      { heb: "תימן", lat: "Theyman", flag: "../../../assets/images/ye.png" }
    ];
  }

}
