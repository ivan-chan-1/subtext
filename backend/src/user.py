from fastapi import APIRouter

router = APIRouter()

@router.get("/user/bookmark", tags=["user"])
def get_bookmarks(user_id: str):
    res = (
        # superbase.table("bookmarks")
        # .select("*")
        # .eq("id", user_id)
        # .
    )