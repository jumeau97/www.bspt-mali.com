import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoTraitanceComponent } from './co-traitance.component';

describe('CoTraitanceComponent', () => {
  let component: CoTraitanceComponent;
  let fixture: ComponentFixture<CoTraitanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoTraitanceComponent]
    });
    fixture = TestBed.createComponent(CoTraitanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
