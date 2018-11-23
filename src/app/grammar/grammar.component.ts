import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable } from "rxjs";

import { GrammarService } from '../services/grammar.service';

import { GrammarPoint } from '../shared/grammarpoint.model';

@Component({
  selector: 'app-grammar',
  templateUrl: './grammar.component.html',
  styleUrls: ['./grammar.component.css']
})
export class GrammarComponent implements OnInit, OnDestroy {
  grammarPoints: GrammarPoint[];
  grammarPointsSubscription: Subscription;

  constructor(public grammarService: GrammarService) {
    this.grammarPointsSubscription = this.grammarService.getGrammarPoints()
      .subscribe((grammarPoints: GrammarPoint[]) => {
        this.grammarPoints = grammarPoints;
        console.log(this.grammarPoints);
      },
      error => console.log(error));
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    
  }

}
