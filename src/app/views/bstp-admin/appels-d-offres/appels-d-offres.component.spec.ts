import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppelsDOffresComponent } from './appels-d-offres.component';

describe('AppelsDOffresComponent', () => {
  let component: AppelsDOffresComponent;
  let fixture: ComponentFixture<AppelsDOffresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppelsDOffresComponent]
    });
    fixture = TestBed.createComponent(AppelsDOffresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
