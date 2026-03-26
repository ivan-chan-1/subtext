from fastapi import APIRouter
from .services import translate_word

router = APIRouter()

@router.get("/translate/{word}/{lang}", tags=["translate"])
def get_word_translation(word: str, lang: str):
    context = "culture"
    return translate_word(word, context, lang, "en")