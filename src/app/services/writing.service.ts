import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from "@angular/common/http";
import { Observable, ReplaySubject } from "rxjs";

import { Letter } from "../shared/letter.model";

import { endpoints } from "../../environments/endpoits";


@Injectable({
  providedIn: 'root'
})
export class WritingService {

  constructor(private http: HttpClient) { }

  getLetters(): Observable<Letter[]> {
    return this.http.get<Letter[]>(endpoints.getLettersURL);
  }

  getLetterInfo(commentaryID){
    return this.http.get(endpoints.getLetterCommentaryURL + commentaryID, {responseType: 'text'});
  }
  
}
