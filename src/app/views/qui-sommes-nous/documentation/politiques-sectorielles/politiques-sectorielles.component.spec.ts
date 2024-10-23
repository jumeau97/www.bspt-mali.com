import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolitiquesSectoriellesComponent } from './politiques-sectorielles.component';

describe('PolitiquesSectoriellesComponent', () => {
  let component: PolitiquesSectoriellesComponent;
  let fixture: ComponentFixture<PolitiquesSectoriellesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PolitiquesSectoriellesComponent]
    });
    fixture = TestBed.createComponent(PolitiquesSectoriellesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
