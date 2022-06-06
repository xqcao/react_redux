import React, { useState } from "react";
import { CopyBlock, dracula } from "react-code-blocks";
import sum4 from "./images/4sum.png";
const pycode = `class Solution:
    def fourSum(self, nums, target: int):
        nums = sorted(nums)
        if len(nums)<4:
            return []
        result=[]
        for i in range(len(nums)-3):
            for j in range(i+1,len(nums)-2):
                l,r=j+1,len(nums)-1
                while l<r:
                    t = nums[i]+nums[j]+nums[l]+nums[r]
                    if nums[i]+nums[j]+nums[l]+nums[r]==target:
                        if [nums[i],nums[j],nums[l],nums[r]] not in result:
                            result.append([nums[i],nums[j],nums[l],nums[r]])
                        l+=1
                        r-=1
                    elif t<target:
                        l+=1
                    elif t>target:
                        r-=1               
        return result
`;
const FourSUm = () => {
  const [lineFlag, setLineFlag] = useState(false);
  return (
    <div>
      <h2>
        <a href="https://leetcode.com/problems/4sum/">4 Sum</a>
      </h2>
      <p>
        Given an array nums of n integers, return an array of all the unique
        quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:
      </p>
      <ul>
        <li>{`0 <= a, b, c, d < n `}</li>
        <li>a, b, c, and d are distinct.</li>
        <li>nums[a] + nums[b] + nums[c] + nums[d] == target</li>
      </ul>
      <i>You may return the answer in any order.</i>
      <br />
      <label htmlFor="onelg">Show line Numbers</label>
      <input
        type="checkbox"
        name="onelg"
        onChange={() => setLineFlag(!lineFlag)}
      />
      <CopyBlock
        text={pycode}
        language={"python"}
        showLineNumbers={lineFlag}
        startingLineNumber={1}
        theme={dracula}
        wrapLines={true}
        codeBlock
      />
      <img src={sum4} alt="4 sum" width="95%" height="680px" />
    </div>
  );
};

export default FourSUm;
