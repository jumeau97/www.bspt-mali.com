import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BstpAdminComponent } from './bstp-admin.component';

describe('BstpAdminComponent', () => {
  let component: BstpAdminComponent;
  let fixture: ComponentFixture<BstpAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BstpAdminComponent]
    });
    fixture = TestBed.createComponent(BstpAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
