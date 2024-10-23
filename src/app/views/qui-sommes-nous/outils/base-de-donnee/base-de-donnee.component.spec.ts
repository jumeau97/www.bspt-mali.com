import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseDeDonneeComponent } from './base-de-donnee.component';

describe('BaseDeDonneeComponent', () => {
  let component: BaseDeDonneeComponent;
  let fixture: ComponentFixture<BaseDeDonneeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BaseDeDonneeComponent]
    });
    fixture = TestBed.createComponent(BaseDeDonneeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
