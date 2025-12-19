from flask import Flask, request, jsonify
from flask_cors import CORS
from services.qa_engine import answer_question
from services.video_summary import get_video_summary

app = Flask(__name__)
CORS(app)   # 👈 THIS FIXES REACT ↔ FLASK

@app.route("/health", methods=["GET"])
def health():
    return jsonify({"status": "ok"})

@app.route("/ask", methods=["POST"])
def ask():
    data = request.json
    question = data.get("question", "")
    answer = answer_question(question)
    return jsonify({"answer": answer})

@app.route("/video-summary", methods=["GET"])
def video_summary():
    return jsonify(get_video_summary())

if __name__ == "__main__":
    app.run(debug=True)
