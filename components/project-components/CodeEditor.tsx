import React from 'react';
import AceEditor from "react-ace";
// import { split as SplitEditor } from "react-ace";

import "ace-builds/src-noconflict/mode-tsx";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/theme-ambiance";

const CodeEditor = (
  {
    value,
    mode,
    key,
    onChange,
    readOnly
  }:
    {
      value: string,
      mode: string,
      key: string,
      onChange?: (v: string) => any
      readOnly?: boolean
    }
): any => {
  return <AceEditor
    mode={mode}
    fontSize={20}
    width="100%"
    height="612px"
    readOnly={readOnly}
    theme="ambiance"
    value={value}
    onChange={onChange}
    name={key}
    setOptions={{ useWorker: false }}
    editorProps={{ $blockScrolling: true }}
  />
}

export default CodeEditor;