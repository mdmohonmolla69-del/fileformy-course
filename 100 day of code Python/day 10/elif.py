# elif condition

num = int(input("Enter the valu of num: "))

if (num < 0):
    print("Number is negative.")
elif (num == 0):
    print("Number is Zero.")
elif (num == 999):
    print("Number is special.")
else:
    print("Number is positive.")
print("I am happy")