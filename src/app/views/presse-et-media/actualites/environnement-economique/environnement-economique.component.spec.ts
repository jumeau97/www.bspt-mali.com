import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvironnementEconomiqueComponent } from './environnement-economique.component';

describe('EnvironnementEconomiqueComponent', () => {
  let component: EnvironnementEconomiqueComponent;
  let fixture: ComponentFixture<EnvironnementEconomiqueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnvironnementEconomiqueComponent]
    });
    fixture = TestBed.createComponent(EnvironnementEconomiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
