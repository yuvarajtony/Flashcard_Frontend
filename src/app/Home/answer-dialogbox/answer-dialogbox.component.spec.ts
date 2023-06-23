import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerDialogboxComponent } from './answer-dialogbox.component';

describe('AnswerDialogboxComponent', () => {
  let component: AnswerDialogboxComponent;
  let fixture: ComponentFixture<AnswerDialogboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnswerDialogboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnswerDialogboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
