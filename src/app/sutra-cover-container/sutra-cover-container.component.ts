import { Component, OnInit, Input } from '@angular/core';
import { Sutra } from '../sutra';

@Component({
  selector: 'sutra-cover-container',
  templateUrl: './sutra-cover-container.component.html',
  styleUrls: ['./sutra-cover-container.component.css']
})
export class SutraCoverContainerComponent implements OnInit {
  @Input() sutra: Sutra;
  constructor() { }

  ngOnInit(): void {
  }

}
