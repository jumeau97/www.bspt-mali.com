import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotDuPresidentComponent } from './mot-du-president.component';

describe('MotDuPresidentComponent', () => {
  let component: MotDuPresidentComponent;
  let fixture: ComponentFixture<MotDuPresidentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MotDuPresidentComponent]
    });
    fixture = TestBed.createComponent(MotDuPresidentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
