

require('dotenv').config(); 

const express = require('express');
const cors = require('cors');
const OpenAI = require('openai'); // Import OpenAI

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// Setup OpenAI Client
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});


app.post('/analyze', async (req, res) => {
    const { resumeText } = req.body;

    try {
        // Call OpenAI API to get suggestions
        const response = await openai.chat.completions.create({
            model: "gpt-4o",
            messages: [
                { role: "system", content: "You are a helpful assistant that gives resume improvement suggestions." },
                { role: "user", content: `Here is a resume (copied and pasted so ignore extra characters). Please analyze it carefully and provide suggestions to improve it for jobs. Focus on clarity, impact, wording, and any missing sections:\n\n${resumeText}` },
            ],
            temperature: 0.7,
            max_tokens: 500,
        });

        
        const suggestions = response.choices[0].message.content;

        
        res.json({ suggestions });

    } catch (error) {
        console.error("OpenAI API error:", error);
        res.status(500).json({ suggestions: "Error generating suggestions." });
    }
});


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
