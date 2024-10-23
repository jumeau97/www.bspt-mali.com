import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammeLabelisationComponent } from './programme-labelisation.component';

describe('ProgrammeLabelisationComponent', () => {
  let component: ProgrammeLabelisationComponent;
  let fixture: ComponentFixture<ProgrammeLabelisationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProgrammeLabelisationComponent]
    });
    fixture = TestBed.createComponent(ProgrammeLabelisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
