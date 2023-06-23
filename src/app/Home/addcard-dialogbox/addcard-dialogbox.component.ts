import { Component } from '@angular/core';

@Component({
  selector: 'app-addcard-dialogbox',
  templateUrl: './addcard-dialogbox.component.html',
  styleUrls: ['./addcard-dialogbox.component.css'],
})
export class AddcardDialogboxComponent {

  question: string;
  answer: string;

  onSubmit()
  {
    console.log(this.question);
    console.log(this.answer);
    
  }
}
