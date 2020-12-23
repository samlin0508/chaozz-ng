import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SutraCoverViewerComponent } from './sutra-cover-viewer.component';

describe('SutraCoverViewerComponent', () => {
  let component: SutraCoverViewerComponent;
  let fixture: ComponentFixture<SutraCoverViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SutraCoverViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SutraCoverViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
