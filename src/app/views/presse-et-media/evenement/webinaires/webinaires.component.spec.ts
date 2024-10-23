import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebinairesComponent } from './webinaires.component';

describe('WebinairesComponent', () => {
  let component: WebinairesComponent;
  let fixture: ComponentFixture<WebinairesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WebinairesComponent]
    });
    fixture = TestBed.createComponent(WebinairesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
