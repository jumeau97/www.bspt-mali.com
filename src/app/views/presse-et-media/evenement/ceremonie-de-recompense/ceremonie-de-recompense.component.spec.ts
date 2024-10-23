import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CeremonieDeRecompenseComponent } from './ceremonie-de-recompense.component';

describe('CeremonieDeRecompenseComponent', () => {
  let component: CeremonieDeRecompenseComponent;
  let fixture: ComponentFixture<CeremonieDeRecompenseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CeremonieDeRecompenseComponent]
    });
    fixture = TestBed.createComponent(CeremonieDeRecompenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
