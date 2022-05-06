import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmDeleteQuestionComponent } from './confirm-delete-question.component';

describe('ConfirmDeleteQuestionComponent', () => {
  let component: ConfirmDeleteQuestionComponent;
  let fixture: ComponentFixture<ConfirmDeleteQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmDeleteQuestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmDeleteQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
