import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SutraCoverContainerComponent } from './sutra-cover-container.component';

describe('SutraCoverContainerComponent', () => {
  let component: SutraCoverContainerComponent;
  let fixture: ComponentFixture<SutraCoverContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SutraCoverContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SutraCoverContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
