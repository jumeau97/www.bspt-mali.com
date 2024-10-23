import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaTeamBstpComponent } from './la-team-bstp.component';

describe('LaTeamBstpComponent', () => {
  let component: LaTeamBstpComponent;
  let fixture: ComponentFixture<LaTeamBstpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LaTeamBstpComponent]
    });
    fixture = TestBed.createComponent(LaTeamBstpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
