import React from "react";
import { CodeBlock, dracula } from "react-code-blocks";
import xx from "./images/countandsay.jpg";
const exampleBody = `Example 1:

Input: n = 1
Output: "1"
Explanation: This is the base case.

Example 2:

Input: n = 4
Output: "1211"
Explanation:
countAndSay(1) = "1"
countAndSay(2) = say "1" = one 1 = "11"
countAndSay(3) = say "11" = two 1's = "21"
countAndSay(4) = say "21" = one 2 + one 1 = "12" + "11" = "1211"
`;
const CountAndSay = () => {
  return (
    <div>
      <h2>$38 Cunt And Say</h2>
      <p>
        The count-and-say sequence is a sequence of digit strings defined by the
        recursive formula:
      </p>
      <ul>
        <li>countAndSay(1) = "1"</li>
        <li>
          countAndSay(n) is the way you would "say" the digit string from
          countAndSay(n-1), which is then converted into a different digit
          string.
        </li>
        <li>{`Constraints: 1 <= n <= 30`}</li>
      </ul>
      <i>
        To determine how you "say" a digit string, split it into the minimal
        number of substrings such that each substring contains exactly one
        unique digit. Then for each substring, say the number of digits, then
        say the digit. Finally, concatenate every said digit.
      </i>
      <br />
      <p>For example, the saying and conversion for digit string "3322251":</p>
      <img src={xx} alt="count and say example" />
      <h3>1,2,3,5,7?</h3>
      <CodeBlock
        text={exampleBody}
        language={"text"}
        showLineNumbers={false}
        startingLineNumber={1}
        theme={dracula}
        wrapLines={true}
        codeBlock
      />
      <hr />
    </div>
  );
};

export default CountAndSay;
