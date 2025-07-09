import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishNewOffersComponent } from './publish-new-offers.component';

describe('PublishNewOffersComponent', () => {
  let component: PublishNewOffersComponent;
  let fixture: ComponentFixture<PublishNewOffersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PublishNewOffersComponent]
    });
    fixture = TestBed.createComponent(PublishNewOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
