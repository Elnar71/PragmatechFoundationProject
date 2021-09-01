str = 'Proqramlaşdırma nə qədər çox şey bildiyinizlə yox bildiyinizlə ortaya çıxardığınız işlərlə maraqlanır'

print(len(str))

bosluq= ' '
bosluqsayi=0
for herf in str:
    if herf==bosluq:
       bosluqsayi+=1

print(len(str)-bosluqsayi)

herfsayi = 0
bolunmuscumle = str.split(' ')
for soz in bolunmuscumle:
    herfsayi+=len(soz)
print(herfsayi)

saitler=['a', 'i', 'o', 'u', 'e', 'ə',]
saitsayi=0
for herf in str:
    for sait in saitler:
     if herf==sait:
      saitsayi+=1
print(saitsayi)    

say=1
for xana in range(64):
    say+=2**xana  
print(say)

nums=[1,2,3,6,7,8,23,78,34,12]
sum=0
for eded in nums:
    sum+=nums.index(eded)
print(sum)    


nums.sort()
print(nums)


nums.sort(reverse=True)
print(nums)


kvad=[]

for reqem in nums:
   kvad.append(reqem**2)
print(kvad)    
  
#   Task 1
nums = [1, 2, 3, 6, 7, 8, 23, 78, 34, 12]
sumtek=0
for tek in nums:
    if tek%2!=0:
        sumtek+=tek
print(sumtek)


# Task2
nums = [1, 2, 3, 6, 7, 8, 23, 78, 34, 12]
ucler=[3,23,34]
sum=0
for reqem in nums:
    for uc in ucler:
        if uc==reqem:
         sum+=1
print(sum)

# Task3 
nums = [1, 2, 3, 6, 7, 8, 23, 78, 34, 12]
tekededler=[]
for tek in nums:
    if tek%2!=0:
        tekededler.append(tek)
print(tekededler)        
          
        #   Task4
str = 'Proqramlaşdırma nə qədər çox şey bildiyinizlə yox, bildiyinizlə ortaya çıxardığınız işlərlə maraqlanır'
remove2word=str.split(' ')
remove2word=remove2word[:-2]
print(remove2word)

# Task5
str = 'Proqramlaşdırma nə qədər çox şey bildiyinizlə yox, bildiyinizlə ortaya çıxardığınız işlərlə maraqlanır'
dividebychar=str.split(',')
print(dividebychar)

# Task6
str = 'Proqramlaşdırma nə qədər çox şey bildiyinizlə yox, bildiyinizlə ortaya çıxardığınız işlərlə maraqlanır'
dividingwords=str.split(' ')
newlist=[]
for soz in dividingwords:
    newlist.append(soz)
print(newlist)