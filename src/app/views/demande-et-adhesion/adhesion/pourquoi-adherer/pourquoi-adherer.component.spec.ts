import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PourquoiAdhererComponent } from './pourquoi-adherer.component';

describe('PourquoiAdhererComponent', () => {
  let component: PourquoiAdhererComponent;
  let fixture: ComponentFixture<PourquoiAdhererComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PourquoiAdhererComponent]
    });
    fixture = TestBed.createComponent(PourquoiAdhererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
