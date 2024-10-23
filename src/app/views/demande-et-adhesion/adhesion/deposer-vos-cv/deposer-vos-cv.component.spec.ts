import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeposerVosCvComponent } from './deposer-vos-cv.component';

describe('DeposerVosCvComponent', () => {
  let component: DeposerVosCvComponent;
  let fixture: ComponentFixture<DeposerVosCvComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeposerVosCvComponent]
    });
    fixture = TestBed.createComponent(DeposerVosCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
