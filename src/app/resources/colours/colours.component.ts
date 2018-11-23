import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colours',
  templateUrl: './colours.component.html',
  styleUrls: ['./colours.component.css']
})
export class ColoursComponent implements OnInit {

  colours: any[];

  constructor() {
    this.colours = [
      { heb: "שחור", lat: "shachor", background: "#000000", textcolour: "#ffffff" },
      { heb: "חום", lat: "chum", background: "#654321", textcolour: "#ffffff" },
      { heb: "סנול", lat: "sanol", background: "#9932cc", textcolour: "#ffffff" },
      { heb: "כחול", lat: "kachol", background: "#0000ff", textcolour: "#ffffff" },
      { heb: "אדום", lat: "adom", background: "#ff0000", textcolour: "#ffffff" },
      { heb: "ירוק", lat: "yarok", background: "#00ff00", textcolour: "#000000" },
      { heb: "כתום", lat: "katom", background: "#ffa500", textcolour: "#ffffff" },
      { heb: "צהוב", lat: "tzahov", background: "#ffff00", textcolour: "#000000" },
      { heb: "ורוד", lat: "varod", background: "#ffc0cb", textcolour: "#000000" },
      { heb: "לבן", lat: "lavan", background: "#ffffff", textcolour: "#000000" }
    ];
  }

  ngOnInit() {
  }

}
