from pydantic import BaseModel

class Bookmark(BaseModel):
    userId: str
    vocab: str
    vidId: str
    snippet: str
    notes: str