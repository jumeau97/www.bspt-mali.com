import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationMobileComponent } from './application-mobile.component';

describe('ApplicationMobileComponent', () => {
  let component: ApplicationMobileComponent;
  let fixture: ComponentFixture<ApplicationMobileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApplicationMobileComponent]
    });
    fixture = TestBed.createComponent(ApplicationMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
