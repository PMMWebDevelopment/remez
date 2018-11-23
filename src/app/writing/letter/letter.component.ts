import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Subscription, Observable } from "rxjs";
import { WritingService } from '../../services/writing.service';
import { Letter } from '../../shared/letter.model';


@Component({
  selector: 'app-letter',
  templateUrl: './letter.component.html',
  styleUrls: ['./letter.component.css']
})
export class LetterComponent implements OnInit, OnDestroy {
  letters: any[];
  letter;
  letterRouteName: string; 
  lettersSubscription: Subscription;
  letterInfoSubscription: Subscription;
  commentary;
  nextLetter;
  previousLetter;
  
  constructor(
    private writingService: WritingService,
    private route: ActivatedRoute,
    private router: Router
    ) { 
    }

  ngOnInit() {
    this.getLetters();
  }
  
  getLetters() {
    this.lettersSubscription = this.writingService.getLetters()
    .subscribe((letters: any[]) => {
      this.letters = letters;
      console.log(this.letters);
      this.letterRouteName = this.route.snapshot.paramMap.get('namelat');
      this.getLetter(this.letterRouteName)
    },
    error => console.log(error));
  }
  
  getLetter(letterNameLat) {
    console.log(letterNameLat);
    this.letter = this.letters[this.getChosenLetterIndex(this.letters, letterNameLat)];
    console.log(this.letter);
    this.getLetterCommentary(this.letter.commentary_url);
  }

  getChosenLetterIndex(arrayOfObjects, letterNameLat) {
    for (var i = 0; i < arrayOfObjects.length; i++) {
      if(arrayOfObjects[i].namelat === letterNameLat) {
        return i;
      } else {
        continue;
      }
    }
  }
  
  getLetterCommentary(commentaryURL) {
    this.letterInfoSubscription = this.writingService.getLetterInfo(commentaryURL).subscribe(commentaryFromBackend => {
      this.commentary = commentaryFromBackend;
    });
  }

  ngOnDestroy() {
    this.lettersSubscription.unsubscribe();
    this.letterInfoSubscription.unsubscribe();
  }

}
