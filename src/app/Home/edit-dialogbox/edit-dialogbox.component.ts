import { Component, Inject, inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { HomeServiceService, flashcard_info } from '../home-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-edit-dialogbox',
  templateUrl: './edit-dialogbox.component.html',
  styleUrls: ['./edit-dialogbox.component.css']
})
export class EditDialogboxComponent implements OnInit {

  flashcard: flashcard_info = {
    flashcard_id: 0,
    question: '',
    answer: ''
  }

  question: string;
  answer: string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<EditDialogboxComponent>,
    private homeservice: HomeServiceService,
    private router: Router) { }

  ngOnInit(): void {
    this.getanswers(this.data);
  }

  getanswers(id: number) {
    this.homeservice.getFlashcard(id).subscribe(response => {
      this.question = response.question;
      this.answer = response.answer;
    });
  }

  onSubmit() {
    this.flashcard.flashcard_id = this.data;
    this.flashcard.question = this.question;
    this.flashcard.answer = this.answer;

    this.homeservice.editFlashcard(this.flashcard).subscribe(res => {
      // console.log(res);
    })

    this.router.navigateByUrl('', {skipLocationChange: false}).then(() => {
      this.router.navigate(['home'])
    })

    this.dialogRef.close();
  }
}
