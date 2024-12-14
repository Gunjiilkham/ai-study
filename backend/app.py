from flask import Flask, request, jsonify
from flask_cors import CORS
from openai import OpenAI
import os
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
CORS(app)

api_key = os.getenv("OPENAI_API_KEY")
if not api_key:
    raise ValueError("API key not found in environment variables!")

client = OpenAI(api_key=api_key)

@app.route('/')
def home():
    return "Welcome to the AI Study Buddy Backend!"

@app.route('/api/message')
def get_message():
    return {"message": "Hello from the backend!"}

@app.route('/api/summarize', methods=['POST'])
def summarize():
    try:
        data = request.json
        text = data.get('text', '')

        if not text:
            return jsonify({"error": "No text provided"}), 400

        response = client.chat.completions.create(
            model="gpt-4o-mini", 
            messages=[
                {"role": "system", "content": "You are a helpful assistant that summarizes text."},
                {"role": "user", "content": f"Summarize the following text: {text}"}
            ],
            max_tokens=150,
            temperature=0
        )

        summary = response.choices[0].message.content.strip()
        return jsonify({"summary": summary})

    except Exception as e:
        print(f"Error: {str(e)}")  # Debugging
        return jsonify({"error": f"Unexpected error: {str(e)}"}), 500

if __name__ == "__main__":
    app.run(debug=True)
