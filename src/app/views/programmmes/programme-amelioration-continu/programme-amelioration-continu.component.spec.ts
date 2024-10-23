import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammeAmeliorationContinuComponent } from './programme-amelioration-continu.component';

describe('ProgrammeAmeliorationContinuComponent', () => {
  let component: ProgrammeAmeliorationContinuComponent;
  let fixture: ComponentFixture<ProgrammeAmeliorationContinuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProgrammeAmeliorationContinuComponent]
    });
    fixture = TestBed.createComponent(ProgrammeAmeliorationContinuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
