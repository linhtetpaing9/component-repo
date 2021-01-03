import React from 'react';
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-tsx";
import "ace-builds/src-noconflict/theme-ambiance";

const CodeEditor = ({ value }) => {
  function onChange(newValue) {
    console.log("change", newValue);
  }

  return <AceEditor
    mode="tsx"
    fontSize={20}
    width="100%"
    height="612px"
    readOnly={true}
    theme="ambiance"
    value={value}
    onChange={onChange}
    name="UNIQUE_ID_OF_DIV"
    editorProps={{ $blockScrolling: true }}
  />
}

export default CodeEditor;