import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutilsDeveloppementIndustrielComponent } from './outils-developpement-industriel.component';

describe('OutilsDeveloppementIndustrielComponent', () => {
  let component: OutilsDeveloppementIndustrielComponent;
  let fixture: ComponentFixture<OutilsDeveloppementIndustrielComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OutilsDeveloppementIndustrielComponent]
    });
    fixture = TestBed.createComponent(OutilsDeveloppementIndustrielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
