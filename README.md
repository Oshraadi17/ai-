
# NeuroPulse AI – Combined Version (Single Web Service)

## מבנה תיקייה אחיד לפריסה קלה:

- כל הקבצים נמצאים באותה תיקייה
- ניתן לפרוס את הכול ב־Render כ־Web Service אחד בלבד

### איך לפרוס את זה ב־Render:

1. פתח Web Service חדש
2. Root Directory: (ריק)
3. Build Command: `npm install`
4. Start Command: `node server.js`
5. Environment Variable:
   - Name: `OPENAI_API_KEY`
   - Value: המפתח שלך מ־OpenAI

### מה כלול:
- index.html / style.css / script.js – האתר שלך
- server.js – שרת שמחובר ל-GPT
- הכל במקום אחד – בלי צורך להפריד Static

