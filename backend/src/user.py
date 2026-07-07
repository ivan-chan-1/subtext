from fastapi import APIRouter, HTTPException, Depends
from supabase import Client
from ..db import get_authed_db

router = APIRouter()

@router.get("/user/bookmarks/all", tags=["user"])
def get_all_bookmarks(language: str, supabase: Client = Depends(get_authed_db)):
    try:
        res = (supabase.table("bookmarks").select("language").eq("language", language).execute())

        return res.data
    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=str(e)
        )

@router.get("/user/languages", tags=["user"])
def get_user_languages(user_id: str, supabase: Client = Depends(get_authed_db)):
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
def get_vocab_bookmark(user_id: str, vocab_id: str):
    pass

@router.get("/user/bookmark/num", tags=["user"])
def get_vocab_bookmark_num(user_id: str, vocab: str, supabase: Client = Depends(get_authed_db)):
    try:
        res = supabase.rpc("get_bookmark_num", { "user_id": user_id, "vocab": vocab })
        return res.data
    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=str(e)
        )