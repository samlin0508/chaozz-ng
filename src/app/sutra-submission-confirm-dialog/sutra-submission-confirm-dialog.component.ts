import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-sutra-submission-confirm-dialog',
  templateUrl: './sutra-submission-confirm-dialog.component.html',
  styleUrls: ['./sutra-submission-confirm-dialog.component.css']
})
export class SutraSubmissionConfirmDialogComponent {
  defaultTransferringMerit: string = "願我命終時，盡除諸障礙，面見阿彌陀，往生安樂剎。";
  transferringMerit: string;
  // exportAsPdf: boolean = true;
  constructor(public dialogRef: MatDialogRef<SutraSubmissionConfirmDialogComponent>) { }

  onComplete(): void {
    let isTransferringMeritEmpty = this.transferringMerit === null || this.transferringMerit === "";

    if(isTransferringMeritEmpty) {
      this.transferringMerit = this.defaultTransferringMerit;
    }

    this.dialogRef.close();
  }
}
