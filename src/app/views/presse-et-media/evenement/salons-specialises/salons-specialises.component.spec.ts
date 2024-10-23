import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalonsSpecialisesComponent } from './salons-specialises.component';

describe('SalonsSpecialisesComponent', () => {
  let component: SalonsSpecialisesComponent;
  let fixture: ComponentFixture<SalonsSpecialisesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SalonsSpecialisesComponent]
    });
    fixture = TestBed.createComponent(SalonsSpecialisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
