

def makenler(n):
    def d(x):
        r = 0
        return n*x
    return d

def capital(func):
    def inner():
        s = func();
        return s.capitalize()
    return inner
capname = capital(get_name)



def make_bold(func):
    def wrapper():
        return "<b>%s</b>"%(func())
    return wrapper

@make_bold
@makedoubler
@capital
def get_name():
    names=['john','sam','sarah','sue','tom']
    import random
    return random.choice(names)
import random
def hiccup(func):
    def wrapper():
        if random.randrange(10)<3:
            return "hiccup"
        else:
            return func()
    return wrapper

@hiccup
def get_sentence():
    names=['see the ball','be the ball','eat the ball']
    import random
    return random.choice(names)


def makedoubler(func):
    print "Before d is defined"
    def d():
        print "running d"
        s = func()
        s=s+" "+s
        return s
    print "after d  is defined but before returned"
    return d

#get_name = makedoubler(get_name)


def f(x,id=123,name="hello"):
    print x
    print id
    print name
    

from functools import wraps

def argprinter(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        print args
        print kwargs
        print func.__name__
        return func(*args,**kwargs);
    return wrapper

@argprinter
def addtwo(x,y):
    return x+y

@argprinter
def addtwo2(x=20,y=30):
    return x+y









