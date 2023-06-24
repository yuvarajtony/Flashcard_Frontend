import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap, Subject } from 'rxjs';


export interface flashcard_info {
  flashcard_id: number,
  question: string,
  answer: string
}

@Injectable({
  providedIn: 'root'
})


export class HomeServiceService {

  flashcard: flashcard_info = {
    flashcard_id: 0,
    question: '',
    answer: ''
  }

  constructor(private httpclient: HttpClient) { }

  addFlashCard(flash: any) {

    this.flashcard.flashcard_id = flash.flashcard_id;
    this.flashcard.question = flash.question;
    this.flashcard.answer = flash.answer;

    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(this.flashcard);

    return this.httpclient.post('https://localhost:7245/api/FlashCard/AddFlashcard', body, {headers: headers})
  }

  getallFlashCard(): Observable<flashcard_info[]> {
    return this.httpclient.get<flashcard_info[]>("https://localhost:7245/api/FlashCard/GelAllFlashcard");
  }

  getFlashcard(id: number): Observable<flashcard_info> {
    return this.httpclient.get<flashcard_info>(`https://localhost:7245/api/FlashCard/GetFlashcardbyID/${id}`);
  }

  editFlashcard(flash: any)
  {
    this.flashcard.flashcard_id = flash.flashcard_id;
    this.flashcard.question = flash.question;
    this.flashcard.answer = flash.answer;

    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(this.flashcard);

    return this.httpclient.put('https://localhost:7245/api/FlashCard/UpdateFlashcard/' + this.flashcard.flashcard_id, body, {headers: headers})
  } 

  deleteFlashcard(id: number)
  {
      return this.httpclient.delete(`https://localhost:7245/api/FlashCard/DeleteFlashCard/${id}`);
  }
}
