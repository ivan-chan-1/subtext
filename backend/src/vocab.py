from fastapi import APIRouter, HTTPException
from .services import translate_word
from .models import Bookmark
from ..db import supabase
import traceback

router = APIRouter()

def save_vocab(word: str, definitions: str, category: str):
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

        print(supabase)

        print("SUCCESS")
        print(res)
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
        traceback.print_exc()
        raise HTTPException(
            status_code=500,
            detail=str(e)
        )

# @router.post("/vocab/bookmark", tags=["transcript"])
# def bookmark_vocab(bookmark: Bookmark):
#     res = (
#         supabase.table("bookmarks")
#         .insert({
#             "user_id": bookmark.userId,
#             "vocab_id": bookmark.vocab,
#             "notes": bookmark.notes
#         })
#         .execute()
#     )