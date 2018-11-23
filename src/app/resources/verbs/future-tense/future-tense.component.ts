import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { VerbsComponent } from '../verbs.component';

@Component({
  selector: 'app-future-tense',
  templateUrl: './future-tense.component.html',
  styleUrls: ['./future-tense.component.css']
})
export class FutureTenseComponent implements OnChanges {
  @Input() futureTense: {};
  future; 

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    this.future = changes.futureTense.currentValue;
  }

}
