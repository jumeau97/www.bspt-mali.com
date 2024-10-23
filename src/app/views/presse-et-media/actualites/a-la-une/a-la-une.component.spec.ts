import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ALaUneComponent } from './a-la-une.component';

describe('ALaUneComponent', () => {
  let component: ALaUneComponent;
  let fixture: ComponentFixture<ALaUneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ALaUneComponent]
    });
    fixture = TestBed.createComponent(ALaUneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
