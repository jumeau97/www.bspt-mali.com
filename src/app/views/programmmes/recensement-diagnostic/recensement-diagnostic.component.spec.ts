import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecensementDiagnosticComponent } from './recensement-diagnostic.component';

describe('RecensementDiagnosticComponent', () => {
  let component: RecensementDiagnosticComponent;
  let fixture: ComponentFixture<RecensementDiagnosticComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecensementDiagnosticComponent]
    });
    fixture = TestBed.createComponent(RecensementDiagnosticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
