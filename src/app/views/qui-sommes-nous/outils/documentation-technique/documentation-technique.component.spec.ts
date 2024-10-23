import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentationTechniqueComponent } from './documentation-technique.component';

describe('DocumentationTechniqueComponent', () => {
  let component: DocumentationTechniqueComponent;
  let fixture: ComponentFixture<DocumentationTechniqueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DocumentationTechniqueComponent]
    });
    fixture = TestBed.createComponent(DocumentationTechniqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
