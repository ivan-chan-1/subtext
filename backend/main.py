from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .src import transcript
from .src import translate

app = FastAPI()
app.include_router(transcript.router)
app.include_router(translate.router)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"Hello": "World"}
