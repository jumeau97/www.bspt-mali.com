import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevenezMembreComponent } from './devenez-membre.component';

describe('DevenezMembreComponent', () => {
  let component: DevenezMembreComponent;
  let fixture: ComponentFixture<DevenezMembreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DevenezMembreComponent]
    });
    fixture = TestBed.createComponent(DevenezMembreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
