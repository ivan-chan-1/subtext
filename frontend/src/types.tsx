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

export interface BookmarkData {
    id: string;
    visited_at: string;
    user_id: string;
    vocab_id: string;
    context: string;
    snippet: string;
    vid_id: string;
    vid_timestamp: number;
    language: string;
}