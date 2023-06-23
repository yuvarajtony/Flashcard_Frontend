import { Component } from '@angular/core';

@Component({
  selector: 'app-edit-dialogbox',
  templateUrl: './edit-dialogbox.component.html',
  styleUrls: ['./edit-dialogbox.component.css']
})
export class EditDialogboxComponent {
  
  question: string;
  answer: string;

  onSubmit()
  {
    console.log(this.question);
    console.log(this.answer);
    
  }
}
