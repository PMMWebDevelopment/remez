import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { VerbsComponent } from '../verbs.component';

@Component({
  selector: 'app-other-forms',
  templateUrl: './other-forms.component.html',
  styleUrls: ['./other-forms.component.css']
})
export class OtherFormsComponent implements OnChanges {
  @Input() otherForms;
  otherVerbForms; 

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    this.otherVerbForms = changes.otherForms.currentValue;
  }

}
