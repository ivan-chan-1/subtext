export interface RawLineDetails {
    text: string;
    start: number;
    duration: number;
}

export interface LineDetails {
    text: string[];
    start: number;
    duration: number;
}

export interface ConvertData {
    vidId: string;
    lang: string;
}

export interface Definition {
    meaning: string;
    example: string;
    pos: string;
    romanisation: string;
}

export interface WordDetails {
    vocabId: string;
    word: string;
    definitions: string[];
    bookmarks: number;
}

export interface LoginFormData {
    email: string;
    password: string;
}

export interface VocabData {
    vocabId: string;
    definitions: Definition[]
    type: string;
    vocab: string;
}