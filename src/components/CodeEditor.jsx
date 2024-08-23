// components/CodeEditor.jsx
import React, { useState, useEffect } from "react";
import { Editor } from "@monaco-editor/react";
import { customLanguageRules, customTheme } from "../utils/customLanguageRules"; // Import the custom language tokenization rules
// import * as monaco from "monaco-editor"; // Import monaco from monaco-editor

const CodeEditor = ({ onChange }) => {
  const [code, setCode] = useState("");

  const handleEditorChange = (value) => {
    setCode(value);
    onChange(value);
  };

  const handleEditorDidMount = (editor, monaco) => {
    // Customize tokenization for custom language
    monaco.languages.register({ id: "customLanguage" });
    monaco.languages.setMonarchTokensProvider("customLanguage", {
      tokenizer: {
        root: customLanguageRules,
      },
    });

    editor.getModel().updateOptions({ language: "customLanguage" });

    monaco.editor.defineTheme("customTheme", customTheme);

    monaco.editor.setTheme("customTheme");

    // Subscribe to editor content change
    editor.onDidChangeModelContent(() => {
      const value = editor.getValue();
      setCode(value);
      onChange(value);
    });
  };

  return (
    <Editor
      width="100%"
      height="100%"
      language="customLanguage" // Set the language to your custom language
      theme="vs-dark" // Change theme if needed
      value={code}
      onChange={handleEditorChange}
      onMount={handleEditorDidMount}
      options={{
        minimap: { enabled: false },
        wordWrap: "on",
        automaticLayout: true,
        fontSize: 14,
        fontFamily: 'Menlo, Consolas, "Courier New", monospace',
      }}
    />
  );
};

export default CodeEditor;
