import { compilePipeFromMetadata } from '@angular/compiler';
import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
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
  // @Input() sutra: Sutra;
  // _indexOfNextTranscribingCharacter: number;
  // @Input()
  // set indexOfNextTranscribingCharacter(indexOfNextTranscribingCharacter: number) {
  //   this._indexOfNextTranscribingCharacter = indexOfNextTranscribingCharacter;
    
  //   if(this._indexOfNextTranscribingCharacter === this.indexOfSutraCharacter) {
  //     document.getElementById("transcribing-character-" + this.indexOfSutraCharacter).focus();
  //   }
  // }

  highlightTranscribingInput: boolean;
  displayTranscribingInput: boolean = true;
  title = 'chaozz-ng';

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.makeTheFirstTranscribingCharacterInputFocused();
  }

  makeTheFirstTranscribingCharacterInputFocused(): void {
    const isTheFirstTranscribingCharacterInput = this.indexOfSutraCharacter === 0;

    if(isTheFirstTranscribingCharacterInput) {
      const inputId = "transcribing-character-0";
      const input = document.getElementById(inputId);
      const isInputNotNull = input !== null;

      if(isInputNotNull) {
        input.focus();
      }
    }
  }

  onKeyup(): void {
    // console.log(this.sutraCharacter);
    // console.log(this.transcribedSutraCharacter);
    // console.log(this.indexOfSutraCharacter);
    // console.log(this.sutra);
    const isTranscribedCharacterValid = this.sutraCharacter.character === this.transcribedSutraCharacter.character;

    if(!isTranscribedCharacterValid) {
      this.highlightTranscribingInput = true;
    } else {
      this.highlightTranscribingInput = false;
      this.displayTranscribingInput = false;
      this.sutraCharacter.character = this.transcribedSutraCharacter.character;
      const inputId = "transcribing-character-".concat((this.indexOfSutraCharacter + 1).toString());
      const input = document.getElementById(inputId);
      const isInputNotNull = input !== null;

      if(isInputNotNull) {
        input.focus();
      }
    }
  }
}
