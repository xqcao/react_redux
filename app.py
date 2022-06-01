
class Solution:
    def reverse(self, x: int) -> int:
        arr=[]
        f=1
        if x<0:
            f=-1
            arr=[y for y in str(x*(-1))][::-1]
        else:
            f=1
            arr = [y for y in str(x)][::-1]
        result=0   
        print(arr)
        for id,i in enumerate(arr):
            result +=int(i)*10**(len(arr)-id-1)
            
        print("rr",result*f)
        if result*f<2**31-1 and result*f>-2**31:
          return result*f
        else:
            return 0
    def reverse2(self, x: int) -> int:
      f=1
      result=0
      if x<0:
        f=-1
      # x=[y for y in str(x*f)]
      x = list(str(x*f))
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

nn=-9646324351  
nn=324351 
# nn=1534236469     
s =Solution().reverse2(nn)
print(nn,s)