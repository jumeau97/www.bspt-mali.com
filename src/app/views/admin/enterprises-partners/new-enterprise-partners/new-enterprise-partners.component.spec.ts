import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEnterprisePartnersComponent } from './new-enterprise-partners.component';

describe('NewEnterprisePartnersComponent', () => {
  let component: NewEnterprisePartnersComponent;
  let fixture: ComponentFixture<NewEnterprisePartnersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewEnterprisePartnersComponent]
    });
    fixture = TestBed.createComponent(NewEnterprisePartnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
