from fastapi import APIRouter, HTTPException, Depends
from .services import translate_word
from .models import Bookmark
from supabase import Client
from ..db import get_authed_db

router = APIRouter()

def save_vocab(word: str, definitions: str, category: str, supabase: Client = Depends(get_authed_db)):
    try:
        res = (
            supabase.table("vocab")
            .insert(
                {
                    "vocab": word,
                    "definitions": definitions,
                    "type": category 
                }
            )
            .execute()
        )

        return
    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=str(e)
        )

@router.get("/vocab/translate", tags=["vocab"])
def translate_vocab(word: str, lang: str, category: str = "word"):
    try:
        context = "culture"
        res = translate_word(word, context, lang, "en")
        # save_vocab(word, res["definitions"], category)
        
        return res
    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=str(e)
        )

@router.post("/vocab/bookmark", tags=["vocab"])
def bookmark_vocab(bookmark: Bookmark, supabase: Client = Depends(get_authed_db)):
    res = (
        supabase.table("bookmarks")
        .insert({
            "user_id": bookmark.userId,
            "vocab_id": bookmark.vocab,
            "notes": bookmark.notes
        })
        .execute()
    )

@router.get("/vocab/definitions", tags=["vocab"])
def vocab_definitions(vocab: str):
    pass