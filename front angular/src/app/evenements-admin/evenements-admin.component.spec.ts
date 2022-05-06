import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvenementsAdminComponent } from './evenements-admin.component';

describe('EvenementsAdminComponent', () => {
  let component: EvenementsAdminComponent;
  let fixture: ComponentFixture<EvenementsAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvenementsAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvenementsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
