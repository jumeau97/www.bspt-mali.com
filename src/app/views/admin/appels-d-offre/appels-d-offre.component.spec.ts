import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppelsDOffreComponent } from './appels-d-offre.component';

describe('AppelsDOffreComponent', () => {
  let component: AppelsDOffreComponent;
  let fixture: ComponentFixture<AppelsDOffreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppelsDOffreComponent]
    });
    fixture = TestBed.createComponent(AppelsDOffreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
