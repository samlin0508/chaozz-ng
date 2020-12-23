import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SutraSubmissionConfirmDialogComponent } from './sutra-submission-confirm-dialog.component';

describe('SutraSubmissionConfirmDialogComponent', () => {
  let component: SutraSubmissionConfirmDialogComponent;
  let fixture: ComponentFixture<SutraSubmissionConfirmDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SutraSubmissionConfirmDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SutraSubmissionConfirmDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
