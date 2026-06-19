from fastapi import APIRouter

router = APIRouter()

@router.get("/user/bookmarks/all", tags=["user"])
def get_all_bookmarks(user_id: str, language: str):
    res = (
        # superbase.table("bookmarks")
        # .select("*")
        # .eq("id", user_id)
        # .
    )
    pass

@router.get("/user/languages", tags=["user"])
def get_user_languages(user_id: str):
    pass

@router.get("/user/bookmark", tags=["user"])
def get_vocab_bookmark(user_id: str, vocab: str):
    pass

@router.get("/user/bookmark/num", tags=["user"])
def get_vocab_bookmark_num(user_id: str, vocab: str):
    pass