import { SutraCharacter } from "./sutra-character";

export interface Sutra {
    uid?: string;
    name?: string;
    content?: SutraCharacter[];
    transcribedContent?: SutraCharacter[];
    indexOfNextTranscribingCharacter?: number;
}