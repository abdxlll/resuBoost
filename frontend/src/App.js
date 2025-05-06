import React, { useState } from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

function App(){
    const [resumeText, setResumeText] = useState('');
    const [suggestions, setSuggestions] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async () => {
        try {
            setLoading(true);
            const response = await axios.post('https://resuboost.onrender.com/analyze', {resumeText});
            setSuggestions(response.data.suggestions);
        } catch (error){
            console.error('Error:', error);
        } finally{
            setLoading(false);
        }
    };

    const handleDownloadPDF = () => {
      const doc = new jsPDF();
      doc.setFontSize(16);
      doc.text("ResuBoost Suggestions", 10, 10);
      const lines = doc.splitTextToSize(suggestions, 180);
      doc.setFontSize(12);
      doc.text(lines, 10, 20);
      const date = new Date().toISOString().slice(0, 10);
      doc.save(`resume_suggestions_${date}.pdf`);

  };


return (
  <div>
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md max-w-4xl w-full space-y-6">
            <h1 className="text-5xl font-bold text-center text-blue-900">ResuBoost</h1>
            <p className="text-2xl font-bold text-center text-blue-700">Improve Your Resume</p>
            <textarea
                className="w-full border border-gray-300 rounded p-4"
                value = {resumeText}
                onChange = {(e) => setResumeText(e.target.value)}
                placeholder = "Paste your resume here..."
                rows = {10}
                cols = {50}
            />
            <button 
              className="w-full bg-blue-700 text-white py-2 px-4 rounded hover:bg-blue-500 transition duration-300"
              onClick = {handleSubmit}>Boost My Resume</button>
            <div className="bg-gray-50 p-4 rounded border border-gray-300 shadow-sm space-y-2">
              <h2 className="font-semibold mb-2 text-blue-700">Suggestions:</h2>
              {loading ? (
                <p className = "text-gray-500 italic">Loading suggestions...</p>
              ) : (
                <ReactMarkdown>{suggestions}</ReactMarkdown>
              )}
            </div>


            <button
              className="w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-500 transition duration-300"
              onClick={handleDownloadPDF}
              disabled={!suggestions}
            >
              Download Suggestions as PDF
            </button>

        </div>
      </div>
      <footer className="w-full text-center text-gray-500 text-sm py-6 self-stretch">
        Abdulrahman Odejayi. Built with React, Express, and OpenAI • ResuBoost © {new Date().getFullYear()}
      </footer>
    </div>
);

}

export default App;