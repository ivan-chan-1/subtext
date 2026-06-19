from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .src import transcript
from .src import vocab
from .src import user


app = FastAPI()
app.include_router(transcript.router)
app.include_router(vocab.router)
app.include_router(user.router)
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
