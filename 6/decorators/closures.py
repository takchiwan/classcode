

def f(x):
    return x*x


square = f

def apply(f,x):
    return f(x)

def make_adder(x):
    def adder(y):
        return y+x
    return adder

add5 = make_adder(5)
add8 = make_adder(8)

def capital(func):
    def inner():
        s = func();
        return s.capitalize()
    return inner
capname = capital(get_name)

@capital
def get_name_decorated():
    names=['john','sam','sarah','sue','tom']
    import random
    return random.choice(names)




