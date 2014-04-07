console.log("CURRY");

var add2 =  function(a,b){
    return a+b;
}

var add2p = function(a) {
    return function(b) {
	return a+b;
    }
}

var add3 = function(a,b,c){
    return a+b+c;
}

var add3p = function(a) {
    return function(b) {
	return function(c) {
		return a+b+c;
	}
    }
}

add3c = _.curry(add3);


var greet = function(a,b,c) {
    return a+" "+b+" "+c;
}
var greetc = _.curry(greet);
var g2 = greetc("My Dear");
var g3 = greetc("Hey","Mrs.");
