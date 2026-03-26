from youtube_transcript_api import YouTubeTranscriptApi
from google import genai

yt = YouTubeTranscriptApi()

def vid_to_text(vid_id, src_lang):
    transcript = yt.fetch(vid_id, languages=src_lang)
    return transcript.to_raw_data()

def create_prompt(word, context, src_lang, target_lang):
    return f"""
    You are a professional translator with fluent knowledge in {src_lang}. You also have extensive knowledge of {src_lang} culture.

    Translate the following word into {target_lang}. You are translating this word from a video about {context}.
    If the word has multiple meanings, include at most 5 definitions. Rank the definitions by relevance to the context of the video, with the first being the most relevant.
    For each definition, include the word's part of speech (pos), romanisation, and one example sentence in {src_lang}.
    If the word has any cultural significance or nuanced meaning relating to the context of the video, include an explanation.

    Format your results into a JSON format following the below example. Note the array is sorted by relevance:

    {{
        definitions: [{{
            meaning: "",
            pos: "",
            romanisation: "",
            example: ""
        }}]
        cultural: ""
    }}

    If an error occurs, return an empty JSON object.

    The word to translate is {word}.
    """

def translate(word, src_lang):
    client = genai.Client()
    prompt = word
    res = client.models.generate_content(model="gemini-2.5-flash-lite", contents=prompt)