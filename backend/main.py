from fastapi import FastAPI
from .src import transcript
from .src import translate

app = FastAPI()
app.include_router(transcript.router)
app.include_router(translate.router)

@app.get("/")
def read_root():
    return {"Hello": "World"}
