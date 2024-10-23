import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeminaireNationalComponent } from './seminaire-national.component';

describe('SeminaireNationalComponent', () => {
  let component: SeminaireNationalComponent;
  let fixture: ComponentFixture<SeminaireNationalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeminaireNationalComponent]
    });
    fixture = TestBed.createComponent(SeminaireNationalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
