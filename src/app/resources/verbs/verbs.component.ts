import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from "rxjs";
import { GrammarService } from '../../services/grammar.service';
import { HttpClient, HttpResponse, HttpHeaders } from "@angular/common/http";
// import { PresentTenseComponent } from '../verbs/present-tense/present-tense.component';
// import { PastTenseComponent } from '../verbs/past-tense/past-tense.component';
// import { FutureTenseComponent } from '../verbs/future-tense/future-tense.component';
// import { ImperativesComponent } from '../verbs/imperatives/imperatives.component';
// import { ParticiplesComponent } from '../verbs/participles/participles.component';
// import { OtherFormsComponent } from '../verbs/other-forms/other-forms.component';

@Component({
  selector: 'app-verbs',
  templateUrl: './verbs.component.html',
  styleUrls: ['./verbs.component.css']
})
export class VerbsComponent implements OnInit, OnDestroy {
  verbs: any;
  chosenVerbID;
  chosenTense: '';
  verbConjugation: any;
  presentTense;
  pastTense;
  futureTense;
  imperatives;
  participles;
  otherForms: {};
  verbsSubscription: Subscription;
  verbConjugationSubscription: Subscription;

  constructor(public grammarService: GrammarService, public http: HttpClient) { 
    this.verbsSubscription = this.grammarService.getListOfVerbs()
      .subscribe(verbs => {
        this.verbs = verbs;
        console.log(this.verbs);
      },
      error => console.log(error));
  }

  ngOnInit() {
  }

  setVerb(id) {
    this.chosenVerbID = id;
    // console.log(this.chosenVerbID);
    this.verbConjugationSubscription = this.grammarService.getVerbConjugation(this.chosenVerbID).subscribe(conjugation => {
      this.verbConjugation = conjugation[+this.chosenVerbID - 1];
      console.log(this.verbConjugation);
      this.presentTense = this.verbConjugation.present;
      this.pastTense = this.verbConjugation.past;
      this.futureTense = this.verbConjugation.future;
      this.imperatives = this.verbConjugation.imperative;
      this.participles = this.verbConjugation.participle;
      this.otherForms = {
        gerundhe: this.verbConjugation.gerundhe,
        gerundla: this.verbConjugation.gerundla,
        infinitivehe: this.verbConjugation.infinitivehe,
        infinitivela: this.verbConjugation.infinitivela
      };
    },
    error => console.log(error));
  }

  ngOnDestroy() {
    this.verbsSubscription.unsubscribe();
    this.verbConjugationSubscription.unsubscribe();
  }

}
