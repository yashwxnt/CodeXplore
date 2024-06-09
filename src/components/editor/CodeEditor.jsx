'use client';
import { useRef, useState, useEffect } from "react";
import { Box, VStack } from "@chakra-ui/react";
import { Editor, loader } from "@monaco-editor/react";
import LanguageSelector from "./LanguageSelector";
import { CODE_SNIPPETS } from "./constants";
import Output from "./Output";
import { ChakraProvider } from "@chakra-ui/react";

const CodeEditor = () => {
  const editorRef = useRef();
  const [value, setValue] = useState("");
  const [language, setLanguage] = useState("javascript");

  useEffect(() => {
    loader.init().then(monaco => {
      monaco.editor.defineTheme('customTheme', {
        base: 'vs-dark',
        inherit: true,
        rules: [],
        colors: {
          "editor.background": "#1e1e1e",
        }
      });
      monaco.editor.setTheme('customTheme');
    });
  }, []);

  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  const onSelect = (language) => {
    setLanguage(language);
    setValue(CODE_SNIPPETS[language]);
  };

  return (
    <ChakraProvider>
      <Box minH="100vh" bg="#0f0a19" color="gray.500" px={6} py={8}>
        <VStack spacing={4} align="stretch">
          <Box>
            <LanguageSelector language={language} onSelect={onSelect} />
            <Editor
              options={{
                minimap: {
                  enabled: false,
                },
              }}
              height="40vh" // Adjusted to be more responsive
              theme="customTheme"
              language={language}
              defaultValue={CODE_SNIPPETS[language]}
              onMount={onMount}
              value={value}
              onChange={(value) => setValue(value)}
            />
          </Box>
          <Output editorRef={editorRef} language={language} />
        </VStack>
      </Box>
    </ChakraProvider>
  );
};

export default CodeEditor;