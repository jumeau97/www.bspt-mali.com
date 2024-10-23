import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotDuDirecteurComponent } from './mot-du-directeur.component';

describe('MotDuDirecteurComponent', () => {
  let component: MotDuDirecteurComponent;
  let fixture: ComponentFixture<MotDuDirecteurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MotDuDirecteurComponent]
    });
    fixture = TestBed.createComponent(MotDuDirecteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
