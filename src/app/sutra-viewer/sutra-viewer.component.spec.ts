import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SutraViewerComponent } from './sutra-viewer.component';

describe('SutraViewerComponent', () => {
  let component: SutraViewerComponent;
  let fixture: ComponentFixture<SutraViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SutraViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SutraViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
