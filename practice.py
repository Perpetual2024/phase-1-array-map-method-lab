#creating a String
s = "Hello, World!"
s1 = "h" + s[1:] #replacing a value
print(len(s1))#length of string
print(s.upper())#upper case
print(s.lower())#lower case

#strip() and replace() removes leading and trailing whitespaces from the string
s = "   Hello, World!   "
print(s.strip())#strip() removes leading and trailing whitespaces
print(s.replace("World", "Python"))#replace() replaces a value