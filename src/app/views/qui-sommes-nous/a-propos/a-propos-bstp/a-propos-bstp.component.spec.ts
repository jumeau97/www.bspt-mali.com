import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AProposBstpComponent } from './a-propos-bstp.component';

describe('AProposBstpComponent', () => {
  let component: AProposBstpComponent;
  let fixture: ComponentFixture<AProposBstpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AProposBstpComponent]
    });
    fixture = TestBed.createComponent(AProposBstpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
