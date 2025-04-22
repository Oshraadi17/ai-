
# NeuroPulse AI – Full Project (Client + Server)

## איך לפרוס את זה ב־Render:

### 1. פריסת השרת:
- צור Web Service חדש ב-Render
- Root Directory: `server`
- Build Command: `npm install`
- Start Command: `node server.js`
- הוסף Environment Variable:
  - Name: `OPENAI_API_KEY`
  - Value: המפתח שלך מ־OpenAI

### 2. פריסת האתר (Client):
- צור Static Site חדש
- Root Directory: `client`
- אין צורך ב־Build Command
- הוסף קישור לשרת שלך בקובץ `script.js` אם כתובת השרת שונה

## מבנה:
- `/client` = האתר שלך
- `/server` = השרת שמחובר ל-GPT

