import { SutraCharacter } from "./sutra-character";

export interface Sutra {
    name?: string;
    contentInBackground?: string;
    content?: SutraCharacter[];
    transcribedContent?: SutraCharacter[];
    indexOfNextTranscribingCharacter?: number;
}