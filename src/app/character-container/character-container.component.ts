import { compilePipeFromMetadata } from '@angular/compiler';
import { Component, OnInit, Input, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { Sutra } from '../sutra';
import { SutraCharacter } from '../sutra-character';

@Component({
  selector: 'character-container',
  templateUrl: './character-container.component.html',
  styleUrls: ['./character-container.component.css']
})
export class CharacterContainerComponent implements OnInit, AfterViewInit {
  @Input() sutraCharacter: SutraCharacter;
  @Input() transcribedSutraCharacter: SutraCharacter;
  @Input() indexOfSutraCharacter: number;
  @Input() indexOfFocusedSutraCharacter: number;
  @Output('nextSutraCharacterFocus')
  nextSutraCharacterFocusEventEmitter = new EventEmitter<number>();

  highlightTranscribingInput: boolean;
  displayTranscribingInput: boolean = true;
  title = 'chaozz-ng';

  constructor() { }

  ngOnInit(): void {
    const isTranscribedCharacterValid = this.sutraCharacter.character === this.transcribedSutraCharacter.character;
    if(isTranscribedCharacterValid) {
      this.displayTranscribingInput = false;
    }
  }

  ngAfterViewInit(): void {
    if(this.indexOfFocusedSutraCharacter === this.indexOfSutraCharacter) {
      this.focusSutraCharacter(this.indexOfSutraCharacter);
    }
  }

  focusSutraCharacter(indexOfSutraCharacter: number): void {
    const inputId = `transcribing-character-${indexOfSutraCharacter}`;
    const input = document.getElementById(inputId);
    const isInputNotNull = input !== null;
    if(isInputNotNull) {
      input.focus();
    }
  }

  onKeyup(): void {
    const isTranscribedCharacterValid = this.sutraCharacter.character === this.transcribedSutraCharacter.character;
    if(!isTranscribedCharacterValid) {
      this.highlightTranscribingInput = true;
    } else {
      this.highlightTranscribingInput = false;
      this.displayTranscribingInput = false;
      this.sutraCharacter.character = this.transcribedSutraCharacter.character;
      this.nextSutraCharacterFocusEventEmitter.emit(this.indexOfSutraCharacter + 1);
    }
  }
}
