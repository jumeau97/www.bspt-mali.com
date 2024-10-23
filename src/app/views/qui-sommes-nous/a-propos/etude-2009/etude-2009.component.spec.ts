import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Etude2009Component } from './etude-2009.component';

describe('Etude2009Component', () => {
  let component: Etude2009Component;
  let fixture: ComponentFixture<Etude2009Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Etude2009Component]
    });
    fixture = TestBed.createComponent(Etude2009Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
