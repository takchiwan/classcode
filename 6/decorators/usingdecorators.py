

def fib2(n):
    a = 1
    b = 1
    while (n>1):
        next = a+b
        a = b
        b = next
        n = n - 1
        print a
        
def fib3(n,a,b):
    if n==1:
        return a
    return fib3(n-1,b,a+b)

t={}
def fib_table(n):
    if t.has_key(n):
        return t[n]
    if n<=2:
        return 1
    t[n]=fib_table(n-1)+fib_table(n-2)
    return t[n]

def memoize(func):
    t={}
    def wrapper(*args):
        if args in t:
            return t[args]
        else:
            t[args]=func(*args)
            return t[args]
    return wrapper

@memoize
def fib(n):
    if n<=2:
        return 1
    else:
        return fib(n-1)+fib(n-2)

@memoize
def rlcslength(s1,s2,i,j):
    if i>=len(s1)or j>=len(s2):
        return 0
    elif s1[i]==s2[j]:
        return 1+ rlcslength(s1,s2,i+1,j+1)
    else:
        return max(rlcslength(s1,s2,i+1,j),rlcslength(s1,s2,i,j+1)  )

s1="aaaaaaaaa123aa56a"
s2="bb12b3bb45bbbb6b"
s3="aaaa"
s4="aaa1"

def decorate(some_arg):
    def outerwrap(func):
        print "outerwrap"
        def innerwrap(*args):
            print "innerwrap"
            print some_arg
            func(*args)
            print "after calling func in innerwrap"
        return innerwrap
    return outerwrap


@decorate("this is the decraotr arg")
def f():
    print "in f"
    
