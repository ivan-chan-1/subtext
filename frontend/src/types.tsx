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