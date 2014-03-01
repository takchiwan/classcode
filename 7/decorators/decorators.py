def fib2(n):
    a=1; b=1
    while (n>1):
        c=a+b
        a=b; b=c
        n=n-1
    return a

def fib3(n,a=1,b=1):
    if n==1:
        return a
    else:
        return fib3(n-1,b,a+b)


t={}
def fib4(n):
    if n in t:
        return t[n]
    if n<=2:
        return 1

    t[n]= fib4(n-1)+fib4(n-2)
    return t[n]


def memoize(func):
    t={}
    def wrapper(*args):
        if args in t:
            return t[args]
        else:
            t[args] = func(*args)
            return t[args]
    return wrapper


def rlcslength(s1,s2,i,j):
    if i>=len(s1)or j>=len(s2):
        return 0
    elif s1[i]==s2[j]:
        return 1+ rlcslength(s1,s2,i+1,j+1)
    else:
        return max(rlcslength(s1,s2,i+1,j),rlcslength(s1,s2,i,j+1)  )

s1="aabaca"
s2="baabbac"

@memoize
def fib(n):
    if n<=2:
        return 1
    else:
        return fib(n-1)+fib(n-2)

