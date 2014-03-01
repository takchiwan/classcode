

def makenler(n):
    def wrapper(x):
        return x*n
    return wrapper
#f = makedoubler()

def doubler(func):
    def wrapper():
        result = func()
        return result +" "+result
    return wrapper



def capital(func):
    def wrapper():
        s = func()
        return s.capitalize()
    return wrapper

def bold(func):
    def wrapper():
        s = "<b>%s</b>"%(func())
        return s
    return wrapper

import random

@bold
@capital
@doubler
def get_name():
    names=['tom','sue','alan','scott','sarah','howie','ben']
    return random.choice(names)


#get_name = doubler(get_name)

def get_sentence():
    sentences=['see the ball','be the ball','eat the ball']
    return random.choice(sentences)
    


from functools import wraps    

def argprinter(func):
    @wraps(func)
    def wrapper(*args,**kwargs):
        print "In wrapper: "
        print args
        print kwargs
        return func(*args,**kwargs)
    return wrapper

@argprinter
def printargs(*args,**kwargs):
    print "in printargs: "
    print args
    print kwargs

@argprinter
def addtwo(x,y):
    return x+y

@argprinter
def addtwo2(x=10,y=20):
    return x+y
