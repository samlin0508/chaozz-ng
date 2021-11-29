import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SutraCover } from '../sutra-cover';

@Component({
  selector: 'sutra-cover-container',
  templateUrl: './sutra-cover-container.component.html',
  styleUrls: ['./sutra-cover-container.component.css']
})
export class SutraCoverContainerComponent implements OnInit {
  @Input() sutraCover: SutraCover;
  @Output('nameClick')
  nameClickEventEmitter = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  onNameClicked(): void {
    this.nameClickEventEmitter.emit(this.sutraCover.uid);
  }
}