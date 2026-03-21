from youtube_transcript_api import YouTubeTranscriptApi

yt = YouTubeTranscriptApi()

def vid_to_text(vid_id, lang):
    transcript = yt.fetch(vid_id, languages=lang)
    print(transcript.to_raw_data())


vid_to_text("1uk7176wJFk", lang=["en"])