import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcardDialogboxComponent } from './addcard-dialogbox.component';

describe('AddcardDialogboxComponent', () => {
  let component: AddcardDialogboxComponent;
  let fixture: ComponentFixture<AddcardDialogboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddcardDialogboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddcardDialogboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
