import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { HomeServiceService } from '../home-service.service';

@Component({
  selector: 'app-answer-dialogbox',
  templateUrl: './answer-dialogbox.component.html',
  styleUrls: ['./answer-dialogbox.component.css']
})
export class AnswerDialogboxComponent implements OnInit {

  answer: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<AnswerDialogboxComponent>,
    private homeservice: HomeServiceService) { }

  ngOnInit() {

    this.getanswers(this.data);
  }

  getanswers(id: number) {
    this.homeservice.getFlashcard(id).subscribe(response => {
      this.answer = response.answer;
    });
  }
}
