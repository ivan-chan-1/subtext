from fastapi import APIRouter
from .services import vid_to_text, vid_summary

router = APIRouter()

@router.get("/transcript/{vid_id}/{lang}", tags=["transcript"])
def get_transcript(vid_id: str, lang: str):
    res = vid_to_text(vid_id, [lang])
    vid_summary(res)
    return res