import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { VerbsComponent } from '../verbs.component';

@Component({
  selector: 'app-past-tense',
  templateUrl: './past-tense.component.html',
  styleUrls: ['./past-tense.component.css']
})
export class PastTenseComponent implements OnChanges {
  @Input() pastTense: {};
  past;

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    this.past = changes.pastTense.currentValue;
  }
}
