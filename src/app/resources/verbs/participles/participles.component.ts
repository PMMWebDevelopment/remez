import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { VerbsComponent } from '../verbs.component';

@Component({
  selector: 'app-participles',
  templateUrl: './participles.component.html',
  styleUrls: ['./participles.component.css']
})
export class ParticiplesComponent implements OnChanges {
  @Input() participles: {};
  participleForms; 

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    this.participleForms = changes.participles.currentValue;
  }
}
