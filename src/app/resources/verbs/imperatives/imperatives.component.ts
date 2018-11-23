import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { VerbsComponent } from '../verbs.component';

@Component({
  selector: 'app-imperatives',
  templateUrl: './imperatives.component.html',
  styleUrls: ['./imperatives.component.css']
})
export class ImperativesComponent implements OnChanges {
  @Input() imperatives: {};
  imperativeForms; 

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    this.imperativeForms = changes.imperatives.currentValue;
    // console.log(this.imperativeForms);
  }

}
