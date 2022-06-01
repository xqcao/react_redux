import React from "react";
import { CodeBlock, dracula } from "react-code-blocks";
import code1 from "./images/leetcode1.png";
const bb = `
Success Details
Runtime: 41 ms, faster than 64.22% of Python3 online submissions for Reverse Integer.
Memory Usage: 13.9 MB, less than 63.22% of Python3 online submissions for Reverse Integer.
Next challenges: 
`;
const pycode = `class Solution:
    def reverse(self, x: int) -> int:
      f=1
      result=0
      if x<0:
        f=-1
      x=[y for y in str(x*f)]
      x = 
      i=0
      while i<len(x)//2:
        temp=x[i]
        x[i]=x[len(x)-i-1]
        x[len(x)-i-1] = temp
        i+=1
      for id,i in enumerate(x):
          result +=int(i)*10**(len(x)-id-1)
      if result*f<2**31-1 and result*f>-2**31:
        return result*f
      return 0
`;
const ReverseInt = () => {
  return (
    <div>
      <h2># 7. Reverse Integer</h2>
      <p>
        Given a signed 32-bit integer x, return x with its digits reversed. If
        reversing x causes the value to go outside the signed 32-bit integer
        range [-2^31, 2^31 - 1], then return 0. Assume the environment does not
        allow you to store 64-bit integers (signed or unsigned).
      </p>
      <p>{bb}</p>
      <CodeBlock
        text={pycode}
        language={"python"}
        showLineNumbers={true}
        startingLineNumber={1}
        theme={dracula}
        wrapLines={true}
        codeBlock
      />
      <img width="95%" height="680px" src={code1} alt="codedetail" />
    </div>
  );
};

export default ReverseInt;
