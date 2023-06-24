import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { HomeServiceService, flashcard_info } from '../home-service.service';

@Component({
  selector: 'app-addcard-dialogbox',
  templateUrl: './addcard-dialogbox.component.html',
  styleUrls: ['./addcard-dialogbox.component.css'],
})
export class AddcardDialogboxComponent {

  flashcard: flashcard_info = {
    flashcard_id: 0,
    question: '',
    answer: ''
  }

  question: string;
  answer: string;

  constructor(private homeservice: HomeServiceService,
    private dialogRef: MatDialogRef<AddcardDialogboxComponent>,
    private router: Router) { }

  onSubmit() {
    this.flashcard.flashcard_id = 0;
    this.flashcard.question = this.question;
    this.flashcard.answer = this.answer;

    this.homeservice.addFlashCard(this.flashcard).subscribe(data => {
      console.log(data);

      this.router.navigateByUrl('', {skipLocationChange: false}).then(() => {
        this.router.navigate(['home'])
      })
  
      this.dialogRef.close();

    })

    console.log(this.question);
    console.log(this.answer);

  }
}
