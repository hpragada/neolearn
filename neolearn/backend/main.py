from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import requests

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# 🔥 PUT YOUR GROQ KEY HERE
GROQ_API_KEY = "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"

URL = "https://api.groq.com/openai/v1/chat/completions"


def ask_groq(prompt):
    response = requests.post(
        "https://api.groq.com/openai/v1/chat/completions",
        headers={
            "Authorization": f"Bearer {GROQ_API_KEY}",
            "Content-Type": "application/json"
        },
        json={
            "model": "openai/gpt-oss-20b",
            "messages": [
                {"role": "user", "content": prompt}
            ],
            "temperature": 0.7
        }
    )

    return response.json()


@app.get("/")
def home():
    return {"message": "NeoLearn AI running 🚀 (GROQ POWERED)"}


@app.post("/ask")
def ask(data: dict):
    subject = data.get("subject", "")
    question = data.get("question", "")

    prompt = f"""
You are a B.Tech expert tutor.
Explain step by step in simple way.

Subject: {subject}
Question: {question}
"""

    result = ask_groq(prompt)

    try:
        return {
            "answer": result["choices"][0]["message"]["content"]
        }
    except:
        return {
            "error": "AI failed",
            "raw": result
        }


@app.post("/quiz")
def quiz(data: dict):
    notes = data.get("notes", "")

    prompt = f"""
Create 5 MCQ questions with answers from this text:

{notes}
"""

    result = ask_groq(prompt)

    try:
        return {
            "quiz": result["choices"][0]["message"]["content"]
        }
    except:
        return {
            "error": "Quiz failed",
            "raw": result
        }
