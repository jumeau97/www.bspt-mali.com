import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitesRealisesComponent } from './activites-realises.component';

describe('ActivitesRealisesComponent', () => {
  let component: ActivitesRealisesComponent;
  let fixture: ComponentFixture<ActivitesRealisesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActivitesRealisesComponent]
    });
    fixture = TestBed.createComponent(ActivitesRealisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
