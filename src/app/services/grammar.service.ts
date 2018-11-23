import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

import { GrammarPoint } from "../shared/grammarpoint.model";

import { endpoints } from "../../environments/endpoits";

@Injectable({
  providedIn: 'root'
})
export class GrammarService {

  constructor(private http: HttpClient) { }

  getGrammarPoints(): Observable<GrammarPoint[]> {
    return this.http.get<GrammarPoint[]>(endpoints.getGrammarPointsURL);
  }

  getGrammarPointInfo(commentaryID) {
    return this.http.get(endpoints.getGrammarPointCommentaryURL + commentaryID, {responseType: 'text'});
  }

  getGrammarPointExamples(display_no) {
    return this.http.get(endpoints.getGrammarPointExamplesURL + '?orderBy="lesson_display_no"&startAt="' +
    (display_no) +
    '"&endAt="' +
    (display_no) +
    '"&print=pretty');
  }

  getListOfVerbs() {
    return this.http.get(endpoints.getVerbsURL);
  }

  getVerbConjugation(verb_no) {
    console.log(verb_no);
    return this.http.get(endpoints.getVerbConjugationsURL + '?orderBy="verb_id"&startAt="' +
    (verb_no) +
    '"&endAt="' +
    (verb_no) +
    '"&print=pretty');

    // return  this.http.get(endpoints.getVerbConjugationsURL + verb_no + '.json')

  }
}
