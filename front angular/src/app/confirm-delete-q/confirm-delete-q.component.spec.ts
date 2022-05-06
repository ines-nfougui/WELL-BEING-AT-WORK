import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmDeleteQComponent } from './confirm-delete-q.component';

describe('ConfirmDeleteQComponent', () => {
  let component: ConfirmDeleteQComponent;
  let fixture: ComponentFixture<ConfirmDeleteQComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmDeleteQComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmDeleteQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
