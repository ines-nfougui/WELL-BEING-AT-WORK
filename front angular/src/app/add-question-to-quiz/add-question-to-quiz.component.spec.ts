import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddQuestionToQuizComponent } from './add-question-to-quiz.component';

describe('AddQuestionToQuizComponent', () => {
  let component: AddQuestionToQuizComponent;
  let fixture: ComponentFixture<AddQuestionToQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddQuestionToQuizComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddQuestionToQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
