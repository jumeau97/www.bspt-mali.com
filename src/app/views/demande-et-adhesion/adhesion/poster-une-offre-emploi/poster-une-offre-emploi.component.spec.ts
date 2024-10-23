import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosterUneOffreEmploiComponent } from './poster-une-offre-emploi.component';

describe('PosterUneOffreEmploiComponent', () => {
  let component: PosterUneOffreEmploiComponent;
  let fixture: ComponentFixture<PosterUneOffreEmploiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PosterUneOffreEmploiComponent]
    });
    fixture = TestBed.createComponent(PosterUneOffreEmploiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
