import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageComponent } from './Home/home-page/home-page.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import { AnswerDialogboxComponent } from './Home/answer-dialogbox/answer-dialogbox.component';
import { EditDialogboxComponent } from './Home/edit-dialogbox/edit-dialogbox.component';
import { DeleteDialogboxComponent } from './Home/delete-dialogbox/delete-dialogbox.component';
import { AddcardDialogboxComponent } from './Home/addcard-dialogbox/addcard-dialogbox.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AnswerDialogboxComponent,
    EditDialogboxComponent,
    DeleteDialogboxComponent,
    AddcardDialogboxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatCardModule,
    MatTableModule,
    MatSlideToggleModule,
    FormsModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
