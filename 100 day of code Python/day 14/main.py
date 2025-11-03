#  back and continu
for i in range(12):
    print("5 X", i+1, "=", 5* (i+1))
    if( i== 10):
        break

print("loop ko shorke ")

for i in range(12):
    if(i == 10):
        print("print the ")
        continue
    print("5 X", i, "=", 5* i)

i = 0
while True:
    print(i)
    i = i+1
    if(i%100 == 0):
        break