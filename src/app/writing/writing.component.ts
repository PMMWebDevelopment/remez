import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable } from "rxjs";

import { WritingService } from '../services/writing.service';

@Component({
  selector: 'app-writing',
  templateUrl: './writing.component.html',
  styleUrls: ['./writing.component.css']
})
export class WritingComponent implements OnInit, OnDestroy {
  letters: any[];
  lettersSubscription: Subscription;

  constructor(public writingService: WritingService) {
  }
  
  getLetters() {
    this.lettersSubscription = this.writingService.getLetters()
      .subscribe((letters: any[]) => {
        this.letters = letters;
        // console.log(this.letters);
      },
      error => console.log(error));
  }

  ngOnInit() {
    this.getLetters();
  }

  ngOnDestroy() {
    this.lettersSubscription.unsubscribe();
  }

}
