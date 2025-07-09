import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterprisesPartnersComponent } from './enterprises-partners.component';

describe('EnterprisesPartnersComponent', () => {
  let component: EnterprisesPartnersComponent;
  let fixture: ComponentFixture<EnterprisesPartnersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnterprisesPartnersComponent]
    });
    fixture = TestBed.createComponent(EnterprisesPartnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
