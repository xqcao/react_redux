import React, { useState } from "react";
import obj from "./Languages";
import { CodeBlock, dracula } from "react-code-blocks";

const CodeBlockComponent = () => {
  const [langVal, setLangVal] = useState("jxs");
  return (
    <div>
      <h2>Code Block Component</h2>
      <select
        onChange={(e) => {
          setLangVal(e.target.value);
          console.log(e);
        }}
      >
        {Object.keys(obj).map((el, idx) => (
          <option key={el} value={el}>
            {el}
          </option>
        ))}
      </select>
      {/* <p>{langVal}</p>
      <p>{obj[langVal]}</p> */}
      {undefined !== obj[langVal] && (
        <CodeBlock
          text={obj[langVal]}
          language={langVal}
          showLineNumbers={true}
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
