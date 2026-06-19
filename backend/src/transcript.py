from fastapi import APIRouter
from .services import vid_to_text, vid_summary
import requests
from bs4 import BeautifulSoup

URL = "https://www.youtube.com/watch?v="

router = APIRouter()

@router.get("/transcript/title/{vid_id}", tags=["transcript"])
def get_title(vid_id: str):
    res = requests.get(URL + vid_id)
    soup = BeautifulSoup(res.text, 'html.parser')
    title = soup.find('meta', property='og:title')
    return title['content'] if title else 'Title not found'

@router.get("/transcript/{vid_id}/{lang}", tags=["transcript"])
def get_transcript(vid_id: str, lang: str):
    res = vid_to_text(vid_id, [lang])
    # vid_summary(res)
    return res