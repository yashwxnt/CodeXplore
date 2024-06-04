'use client';
import React, { useState, useEffect } from 'react';
import { Editor, loader } from '@monaco-editor/react';
import axios from 'axios';

const Compiler = () => {
  const [code, setCode] = useState('// Write your code here');
  const [output, setOutput] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('javascript');

  useEffect(() => {
    loader.init().then(monaco => {
      monaco.editor.defineTheme('myTheme', {
        base: 'vs-dark', // can also be 'vs', 'hc-black', 'vs-dark'
        inherit: true, // can also be false to completely replace the builtin rules
        rules: [],
        colors: {}
      });
      monaco.editor.setTheme('myTheme');
    });
  }, []);

  const handleEditorChange = (value: string | undefined) => {
    setCode(value || '');
  };

  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedLanguage(event.target.value);
  };

  const handleCompile = async () => {
    try {
      console.log('handleCompile', {
        script: code,
        language: selectedLanguage,
      });
      const response = await axios.post('http://localhost:4500/compiler/execute', {
        script: code,
        language: selectedLanguage,
      });
      console.log('output: ', response.data.output);
      setOutput(response.data.output);
    } catch (error) {
      console.error('Compilation error:', error);
      setOutput('An error occurred during compilation');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Online Code Compiler</h1>
      <div className="editor-container mb-4" style={{ height: '400px' }}>
        <Editor
          height="100%"
          language={selectedLanguage}
          value={code}
          onChange={handleEditorChange}
          theme="myTheme"
        />
      </div>
      <div className="language-selector mb-4">
        <label htmlFor="language">Select Language:</label>
        <select
          id="language"
          value={selectedLanguage}
          onChange={handleLanguageChange}
          className="bg-gray-200 text-black py-2 px-4 rounded-md"
        >
          <option value="javascript">JavaScript</option>
          <option value="python">Python</option>
          <option value="java">Java</option>
          <option value="c">C</option>
          <option value="cpp">C++</option>
          <option value="csharp">C#</option>
          <option value="php">PHP</option>
          <option value="ruby">Ruby</option>
          <option value="go">Go</option>
          <option value="swift">Swift</option>
          <option value="kotlin">Kotlin</option>
          <option value="r">R</option>
          {/* Add more options for other languages */}
        </select>
      </div>
      <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleCompile}>
        Compile
      </button>
      <div className="output-container mt-4">
        <h2 className="text-xl font-bold text-black">Output:</h2>
        <pre className="bg-gray-200 p-4 rounded text-black">{output}</pre>
      </div>
    </div>
  );
};

export default Compiler;