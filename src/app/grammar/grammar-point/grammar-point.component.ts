import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Subscription } from "rxjs";
import { GrammarService } from '../../services/grammar.service';
import * as $ from 'jquery';


@Component({
  selector: 'app-grammar-point',
  templateUrl: './grammar-point.component.html',
  styleUrls: ['./grammar-point.component.css']
})
export class GrammarPointComponent implements OnInit, OnDestroy {
  grammarPoints: any[];
  grammarPoint;
  grammarPointRouteName: string;
  grammarPointsSubscription: Subscription;
  grammarPointInfoSubscription: Subscription;
  grammarPointExamplesSubscription: Subscription;
  commentary;
  examples: any[];

  constructor(
    private grammarService: GrammarService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.getGrammarPoints();
  }
  
  getGrammarPoints() {
    this.grammarPointsSubscription = this.grammarService.getGrammarPoints()
    .subscribe((grammarPoints: any[]) => {
      this.grammarPoints = grammarPoints;
      // console.log(this.grammarPoints);
      this.grammarPointRouteName = this.route.snapshot.paramMap.get('display_no');
      this.getGrammarPoint(this.grammarPointRouteName);
    },
    error => console.log(error));
  }

  getGrammarPoint(displayNo) {
    // console.log(displayNo);
    this.grammarPoint = this.grammarPoints[displayNo - 1];
    // console.log(this.grammarPoint);
    this.getGrammarPointCommentary(this.grammarPoint.commentary_url);
  }
  
  getGrammarPointCommentary(commentaryURL) {
    this.grammarPointInfoSubscription = this.grammarService.getGrammarPointInfo(commentaryURL).subscribe(commentaryFromBackend => {
      this.commentary = commentaryFromBackend;
      // console.log(this.commentary);
      console.log(this.grammarPoint);
      this.getGrammarPointExamples(this.grammarPoint.display_no);
    });
  }
  
  getGrammarPointExamples(displayNo) {
    this.grammarPointExamplesSubscription = this.grammarService.getGrammarPointExamples(displayNo).subscribe((examplesFromBackend: any[]) => {
      this.examples = examplesFromBackend;
      this.examples = Object.keys(examplesFromBackend).map(function(k) { return examplesFromBackend[k] });
      console.log(this.examples);
    });
  }
  
  ngOnDestroy() {
    this.grammarPointsSubscription.unsubscribe();
    this.grammarPointInfoSubscription.unsubscribe();
    this.grammarPointExamplesSubscription.unsubscribe();
  }
  
}
