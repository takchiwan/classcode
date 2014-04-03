
l = [1,2,3,4,5];

var square = function(x) {
    return x*x;
}

var even = function(x) {
    return x%2==0;
}

var map = function(l,f) {
    result =[] ;
    for (var i=0;i < l.length;i++){
	result.push( f( l[i], i, l ));
    }
    return result;
}



var filter = function(l,f) {
    result =[] ;
    for (var i=0;i < l.length;i++){
	if (f(l[i])) {
	result.push( l[i] );
	}
    }
    return result;
}

var foreach = function(l,f) {
    for (var i=0;i < l.length;i++){
	l[i] =  f(l[i]);
    }
}

var mult = function(a,b) { return a*b;}

var add = function(a,b) {
    return a+b;
}
                         
var reduce = function(l,f,init) {
    for (var i=0;i<l.length;i++) {
	init = f(init,l[i],i,l)
    }
    return init;
}
