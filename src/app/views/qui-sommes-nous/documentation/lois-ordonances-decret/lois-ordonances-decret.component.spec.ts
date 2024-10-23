import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoisOrdonancesDecretComponent } from './lois-ordonances-decret.component';

describe('LoisOrdonancesDecretComponent', () => {
  let component: LoisOrdonancesDecretComponent;
  let fixture: ComponentFixture<LoisOrdonancesDecretComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoisOrdonancesDecretComponent]
    });
    fixture = TestBed.createComponent(LoisOrdonancesDecretComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
