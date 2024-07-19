import React,{useState} from 'react';
import MarkdownEditor from 'react-markdown-editor-lite';
import 'react-markdown-editor-lite/lib/index.css';

const CustomApp = () => {
  return (
    <>
      <MarkdownEditorComponent/>
    </>
  )
}

export default CustomApp

const MarkdownEditorComponent = () => {
    const [markdown, setMarkdown] = useState('');
  
    const handleEditorChange = ({ text }) => {
      setMarkdown(text);
    };
  
    return (
      <div>
        <h1>Markdown Editor</h1>
        <MarkdownEditor
          value={markdown}
          onChange={handleEditorChange}
        />
        <div>
          <h2>Preview</h2>
          <div className="markdown-preview">
            <ReactMarkdown children={markdown} />
          </div>
        </div>
      </div>
    );
  };
