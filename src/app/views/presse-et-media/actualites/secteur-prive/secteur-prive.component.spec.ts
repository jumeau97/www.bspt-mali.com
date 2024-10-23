import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecteurPriveComponent } from './secteur-prive.component';

describe('SecteurPriveComponent', () => {
  let component: SecteurPriveComponent;
  let fixture: ComponentFixture<SecteurPriveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecteurPriveComponent]
    });
    fixture = TestBed.createComponent(SecteurPriveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
