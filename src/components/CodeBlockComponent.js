import React, { useState } from "react";
import obj from "./Languages";
import { CodeBlock, dracula } from "react-code-blocks";

const CodeBlockComponent = () => {
  const [langVal, setLangVal] = useState("jxs");
  const [lineFlag, setLineFlag] = useState(false);
  return (
    <div>
      <h2>Code Block Component</h2>
      <select
        style={{ fontSize: ".9rem", padding: " 2px 5px" }}
        onChange={(e) => {
          setLangVal(e.target.value);
        }}
      >
        <option value="">--Please choose an option--</option>
        {Object.keys(obj).map((el, idx) => (
          <option key={el} value={el}>
            {el}
          </option>
        ))}
      </select>
      {/* <p>{langVal}</p>
      <p>{obj[langVal]}</p> */}
      <br />
      <br />
      <label htmlFor="onelg">Show line Numbers</label>
      <input type="checkbox" onChange={() => setLineFlag(!lineFlag)} />
      {undefined !== obj[langVal] && (
        <CodeBlock
          text={obj[langVal]}
          language={langVal}
          showLineNumbers={lineFlag}
          startingLineNumber={1}
          theme={dracula}
          wrapLines={true}
          codeBlock
        />
      )}
    </div>
  );
};

export default CodeBlockComponent;
