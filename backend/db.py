import os

from fastapi import HTTPException, Header
from supabase import create_client
from dotenv import load_dotenv

load_dotenv()
SUPABASE_URL = os.environ.get("SUPABASE_URL")
SUPABASE_KEY = os.environ.get("SUPABASE_KEY")

def get_authed_db(authorization: str = Header(...)):
    if not authorization.startswith("Bearer "):
        raise HTTPException(status_code=401, detail="Missing bearer token")

    token = authorization.removeprefix("Bearer ").strip()

    supabase = create_client(SUPABASE_URL, SUPABASE_KEY)
    res = supabase.auth.get_user(token)

    if not res or not res.user:
        raise HTTPException(status_code=401, detail="Invalid or expired token")
    
    supabase.postgrest.auth(token)
    return supabase
