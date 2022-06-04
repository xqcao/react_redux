



class Solution:
    def fourSum2(self, nums, target: int):
        if len(nums)<4:
            return []
        nums = sorted(nums)
        print(nums)
        result=[]
        for i in range(len(nums)):
            for j in range(len(nums)):
                    for k in range(len(nums)):
                        if i!=k and j!=k and i!=j:
                            if target-(nums[k]+nums[i]+nums[j]) in nums[:i]+nums[i+1:j]+nums[j+1:k]+nums[k+1:]:
                                if nums[i]<=nums[j] and nums[j]<=nums[k] and nums[k]<=target-(nums[k]+nums[i]+nums[j]):
                                    print(nums[i],nums[j],nums[k],target-(nums[k]+nums[i]+nums[j]))
                                    if [nums[i],nums[j],nums[k],target-(nums[k]+nums[i]+nums[j])] not in result:
                                        result.append([nums[i],nums[j],nums[k],target-(nums[k]+nums[i]+nums[j])])
        return result
      
    def fourSum1(self, nums, target: int):
        if len(nums)<4:
            return []
        nums = sorted(nums)
        print(nums)
        result=[]
        for i in range(len(nums)):
            for j in range(len(nums)):
                    for k in range(len(nums)):
                        for h in range(len(nums)):
                            if i<=j and j<=k and k<=h:
                                if i!=k and j!=k and i!=j and h!=k and j!=h and i!=h:
                                    if nums[i]+nums[j]+nums[k]+nums[h]==target:
                                        if nums[i]<=nums[j] and nums[j]<=nums[k] and nums[k]<=nums[h]:
                                            print(nums[i],nums[j],nums[k],nums[h])
                                            if [nums[i],nums[j],nums[k],nums[h]] not in result:
                                                result.append([nums[i],nums[j],nums[k],nums[h]])
        return result
    def fourSum(self, nums, target: int):
        nums = sorted(nums)
        # if len(nums)<4:
        #     return []
        result=[]
        for i in range(len(nums)-3):
            for j in range(i+1,len(nums)-2):
                # l,r=j+1,len(nums)-1
                # while l<r:
                #     print(i,j,l,r)
                #     t = nums[i]+nums[j]+nums[l]+nums[r]
                #     if t==target:
                #         if [nums[i],nums[j],nums[l],nums[r]] not in result:
                #             result.append([nums[i],nums[j],nums[l],nums[r]])
                #     elif t<target:
                #         l+=1
                #     elif t>target:
                #         r-=1
                    
                #     l+=1
                l,r=j+1,len(nums)-1
                
                while  l<r:
                    print(i,j,l,r)
                    print([nums[i],nums[j],nums[l],nums[r]])
                    t = nums[i]+nums[j]+nums[l]+nums[r]
                    if t==target:
                        if [nums[i],nums[j],nums[l],nums[r]] not in result:
                            result.append([nums[i],nums[j],nums[l],nums[r]])
                        l+=1
                        r-=1
                    elif t<target:
                        l+=1
                    elif t>target:
                        r-=1
                    
                
                # while l<r:
                #     print(i,j,l,r)
                #     t = nums[i]+nums[j]+nums[l]+nums[r]
                #     if t==target:
                #         if [nums[i],nums[j],nums[l],nums[r]] not in result:
                #             result.append([nums[i],nums[j],nums[l],nums[r]])
                #             continue
                #     elif t<target:
                #         l+=1
                #     elif t>target:
                #         r-=1
                #     l+=1
                #     r-=1
                        
        return result
        
                
                
        return result
        
        
nums = [1,0,-1,0,-2,2]

target=0

# nums=[2,2,2,2,2]
# target = 8

nums=[2,0,3,0,1,2,4]
target=7
nums=[-3,-2,-1,0,0,1,2,3]
nums=[-3,-2,-1]
target=0
# nums=[-500,-481,-480,-469,-437,-423,-408,-403,-397,-381,-379,-377,-353,-347,-337,-327,-313,-307,-299,-278,-265,-258,-235,-227,-225,-193,-192,-177,-176,-173,-170,-164,-162,-157,-147,-118,-115,-83,-64,-46,-36,-35,-11,0,0,33,40,51,54,74,93,101,104,105,112,112,116,129,133,146,152,157,158,166,177,183,186,220,263,273,320,328,332,356,357,363,372,397,399,420,422,429,433,451,464,484,485,498,499]
# target=2139
s = Solution().fourSum(nums, target)
print(nums,f"--->{target}===>",s)