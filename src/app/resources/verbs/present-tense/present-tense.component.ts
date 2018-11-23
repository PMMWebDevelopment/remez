import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { VerbsComponent } from '../verbs.component';

@Component({
  selector: 'app-present-tense',
  templateUrl: './present-tense.component.html',
  styleUrls: ['./present-tense.component.css']
})
export class PresentTenseComponent implements OnChanges {
  @Input() presentTense: {};
  present; 

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    this.present = changes.presentTense.currentValue;
  }

}
