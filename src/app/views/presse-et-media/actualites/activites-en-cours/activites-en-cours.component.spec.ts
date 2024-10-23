import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitesEnCoursComponent } from './activites-en-cours.component';

describe('ActivitesEnCoursComponent', () => {
  let component: ActivitesEnCoursComponent;
  let fixture: ComponentFixture<ActivitesEnCoursComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActivitesEnCoursComponent]
    });
    fixture = TestBed.createComponent(ActivitesEnCoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
