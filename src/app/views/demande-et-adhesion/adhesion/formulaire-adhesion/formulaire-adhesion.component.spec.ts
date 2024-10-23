import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireAdhesionComponent } from './formulaire-adhesion.component';

describe('FormulaireAdhesionComponent', () => {
  let component: FormulaireAdhesionComponent;
  let fixture: ComponentFixture<FormulaireAdhesionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormulaireAdhesionComponent]
    });
    fixture = TestBed.createComponent(FormulaireAdhesionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
