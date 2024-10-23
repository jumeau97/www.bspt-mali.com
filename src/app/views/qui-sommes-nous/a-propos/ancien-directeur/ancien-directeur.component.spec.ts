import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AncienDirecteurComponent } from './ancien-directeur.component';

describe('AncienDirecteurComponent', () => {
  let component: AncienDirecteurComponent;
  let fixture: ComponentFixture<AncienDirecteurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AncienDirecteurComponent]
    });
    fixture = TestBed.createComponent(AncienDirecteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
