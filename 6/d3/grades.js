
console.log("HELLO");

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


var height=400, width=900;
var yPadding=10;
var xPadding=40;

var xScale = d3.scale.linear()
	.domain([0,850])
	.range([0,width]);

var yScale = d3.scale.linear()
	.domain([65,100])
	.range([height,0]);


d3.csv("grades.csv",function(d) {makeSVG(d);});


var makeSVG = function(d) {
    var svg = d3.select("body").append('svg')
	    .attr('width',width)
	    .attr('height',height)
	    .attr('id','svg')
	    .style('border','solid px');

    svg.selectAll('grades')
	.data(d)
	.enter()
	.append("circle")
	.attr('class','grades')
	.attr('r',5)
	.attr('cx',function(d,i){return xScale(i);})
	.attr('cy',function(d) {return yScale(d.overall);})
    .style('title',function(d){return d.overall;})
	.attr('fill',function(d) {return getRandomColor();});
}
