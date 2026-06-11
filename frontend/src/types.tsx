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
    word: string;
    definitions: string[];
    bookmarks: number;
    timestamp: string;
}