
def f(x):
    return x*x

square = f

def apply(f,x):
    return f(x)


def outer():
    def inner():
        print "this is the inner function"
    print "we're in the outer"
    return inner

def outer2():
    i = 10
    def inner(x):
        return x+i
    return inner

def make_adder(n):
    def inner(x):
        return n+x
    return inner
add5=make_adder(5)
add7=make_adder(7)

import random
def get_name():
    names=['tom','sue','alan','scott','sarah','howie','ben']
    return random.choice(names)


def get_sentence():
    sentences=['see the ball','be the ball','eat the ball']
    return random.choice(sentences)

def capital(func):
    def inner():
        s = func()
        return s.capitalize()
    return inner

sent2 = capital(get_sentence)
name2 = capital(get_name)

@capital
def gn():
    names=['tom','sue','alan','scott','sarah','howie','ben']
    return random.choice(names)
