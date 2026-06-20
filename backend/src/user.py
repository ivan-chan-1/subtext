from fastapi import APIRouter, HTTPException
from ..db import supabase

router = APIRouter()

@router.get("/user/bookmarks/all", tags=["user"])
def get_all_bookmarks(user_id: str, language: str):
    try:
        res = supabase.rpc("get_all_bookmarks", { "user_id": user_id, "language": language })

        return res.data
    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=str(e)
        )

@router.get("/user/languages", tags=["user"])
def get_user_languages(user_id: str):
    try:
        res = (supabase.table("profiles").select("user_id, languages").eq("id", user_id).execute())
        
        if (res.count == 0):
            raise Exception
        
        return res.data[0]["languages"]
    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=str(e)
        )

@router.get("/user/bookmark", tags=["user"])
def get_vocab_bookmark(user_id: str, vocab: str):
    pass

@router.get("/user/bookmark/num", tags=["user"])
def get_vocab_bookmark_num(user_id: str, vocab: str):
    try:
        res = supabase.rpc("get_bookmark_num", { "user_id": user_id, "vocab": vocab })
        return res.data
    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=str(e)
        )