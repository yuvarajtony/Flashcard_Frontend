import { Component } from '@angular/core';
import { AnswerDialogboxComponent } from '../answer-dialogbox/answer-dialogbox.component';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { EditDialogboxComponent } from '../edit-dialogbox/edit-dialogbox.component';
import { DeleteDialogboxComponent } from '../delete-dialogbox/delete-dialogbox.component';
import { AddcardDialogboxComponent } from '../addcard-dialogbox/addcard-dialogbox.component';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'What is 2 + 2', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})

export class HomePageComponent {

  value = false;

  constructor(public ans_dialog: MatDialog, public edit_dialog: MatDialog, public add_dialog: MatDialog, public delete_dialog: MatDialog) {}

  openAnsDialog() {
    this.ans_dialog.open(AnswerDialogboxComponent);
  }

  openEditDialog()
  {
    this.edit_dialog.open(EditDialogboxComponent);
  }

  openAddDialog()
  {
    this.ans_dialog.open(AddcardDialogboxComponent);
  }

  openDeleteDialog()
  {
    this.delete_dialog.open(DeleteDialogboxComponent);
  }


  displayedColumns: string[] = ['position', 'name', 'weight', 'button1', 'button2'];
  dataSource = ELEMENT_DATA;
}
