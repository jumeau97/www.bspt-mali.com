import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvenementDeNosPartenairesComponent } from './evenement-de-nos-partenaires.component';

describe('EvenementDeNosPartenairesComponent', () => {
  let component: EvenementDeNosPartenairesComponent;
  let fixture: ComponentFixture<EvenementDeNosPartenairesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EvenementDeNosPartenairesComponent]
    });
    fixture = TestBed.createComponent(EvenementDeNosPartenairesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
