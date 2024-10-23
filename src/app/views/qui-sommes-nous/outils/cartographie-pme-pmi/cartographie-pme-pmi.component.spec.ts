import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartographiePmePmiComponent } from './cartographie-pme-pmi.component';

describe('CartographiePmePmiComponent', () => {
  let component: CartographiePmePmiComponent;
  let fixture: ComponentFixture<CartographiePmePmiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CartographiePmePmiComponent]
    });
    fixture = TestBed.createComponent(CartographiePmePmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
