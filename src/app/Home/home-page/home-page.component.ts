import { Component, OnInit } from '@angular/core';
import { AnswerDialogboxComponent } from '../answer-dialogbox/answer-dialogbox.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { EditDialogboxComponent } from '../edit-dialogbox/edit-dialogbox.component';
import { DeleteDialogboxComponent } from '../delete-dialogbox/delete-dialogbox.component';
import { AddcardDialogboxComponent } from '../addcard-dialogbox/addcard-dialogbox.component';
import { flashcard_info, HomeServiceService } from '../home-service.service';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';



@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})

export class HomePageComponent implements OnInit {

  value = false;

  // index: number = 1;

  flashcards!: flashcard_info[];

  constructor(public ans_dialog: MatDialog,
    public edit_dialog: MatDialog,
    public add_dialog: MatDialog,
    public delete_dialog: MatDialog,
    private homeservice: HomeServiceService,
    private router: Router) { }

  dataSource: any;

  ngOnInit() {
    this.fetchFlashcards();
  }

  fetchFlashcards() {
    this.homeservice.getallFlashCard().subscribe(data => {
      this.flashcards = data;
      console.log(data);

      this.dataSource = new MatTableDataSource(this.flashcards);
    })
  }

  openAddDialog() {
    this.ans_dialog.open(AddcardDialogboxComponent);
  }


  openAnsDialog(id: number) {
    const dRef = this.ans_dialog.open(AnswerDialogboxComponent, {
      data: id 
    });
  }

  openEditDialog(id: number) {
    const dRef = this.edit_dialog.open(EditDialogboxComponent, {
      data: id
    });
  }


  openDeleteDialog(id: number) {
    const dRef = this.delete_dialog.open(DeleteDialogboxComponent, {
      data: id
    });
  }

  helpPage(){
    this.router.navigate(['help-page']);
  }

  displayedColumns: string[] = ['slno', 'question', 'ans-btn', 'edit-btn', 'delete-btn'];
}
