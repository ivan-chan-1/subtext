from youtube_transcript_api import YouTubeTranscriptApi
from youtube_transcript_api.proxies import WebshareProxyConfig
from google import genai
from dotenv import load_dotenv
import os
from enum import Enum
from typing import List, Dict

import json

load_dotenv()

MODEL = "gemini-2.5-flash-lite"
class ResponseType(Enum):
    TEXT = "text/plain"
    JSON = "application/json"

yt = YouTubeTranscriptApi(
    proxy_config=WebshareProxyConfig(
        proxy_username = os.getenv("PROXY_USERNAME"),
        proxy_password = os.getenv("PROXY_PASSWORD")
    )
)
client = genai.Client()

## AI
def gemini(prompt: str, res_type: ResponseType):
    res = client.models.generate_content(model=MODEL, contents=prompt, config={"response_mime_type": res_type.value})
    
    if ResponseType.JSON == res_type:
        return json.loads(res.text)
    else:
        return res.text

## Video Processing
def vid_to_text(vid_id: str, src_lang: List[str]):
    transcript = yt.fetch(vid_id, languages=src_lang)

    return transcript.to_raw_data()

def vid_summary(transcript: List[Dict]):
    compiled = " ".join([x["text"] for x in transcript])

    return gemini(f"""
    You are a professional notetaker. Summarise the following transcript into a one sentence high-level summary under 20 words that captures its core concepts."

    The transcript you to summarise is {compiled}.
    """, ResponseType.TEXT)

## Translation 
def translate_word(word: str, context: str, src_lang: str, target_lang: str):
    return gemini(f"""
    You are a professional translator with fluent knowledge in {src_lang}. You also have extensive knowledge of {src_lang} culture.

    Translate the following word into {target_lang}. You are translating this word from a video about {context}.
    If the word has multiple dictionary meanings, include at most 5 definitions. Rank the definitions by relevance to the context of the video, with the first being the most relevant.
    For each definition, include the word's part of speech (pos), romanisation, and one example sentence in {src_lang}.
    If the word has any cultural significance or nuanced meaning relating to the context of the video, include an explanation under 30 words. 

    Format your results into a JSON object following the below example. Note the array is sorted by relevance:

    {{
        "definitions": [{{
            meaning: "",
            pos: "",
            romanisation: "",
            example: ""
        }}]
        "cultural": ""
    }}

    If an error occurs, return an empty JSON object.

    The word to translate is {word}.
    """, ResponseType.JSON)