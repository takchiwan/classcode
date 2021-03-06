
console.log("HELLO");

var height=400, width=400;
var yPadding=10;
var xPadding=10;

var d1 = [ {'label':'a','y':Math.floor(Math.random()*100)},
       {'label':'b','y':Math.floor(Math.random()*100)},
       {'label':'c','y':Math.floor(Math.random()*100)},
       {'label':'d','y':Math.floor(Math.random()*100)},
       {'label':'e','y':Math.floor(Math.random()*100)},
       {'label':'f','y':Math.floor(Math.random()*100)},
       {'label':'g','y':Math.floor(Math.random()*100)}
]

var svg = d3.select("body").append('svg')
	.attr('width',width)
	.attr('height',height)
	.attr('id','svg')
	.style('border','solid px');


/*
var c = svg.selectAll("circle")
	.data(d1)
	.enter()
	.append("circle")
	.attr('r',10)
	.attr('cx',function(d) { return 3*d.y;})
	.attr('cy',100)
	.attr('fill','steelblue');

var c = svg.selectAll("circle")
	.transition()
	.duration(4000)
	.delay(3000)
	.attr('r',10)
	.attr('cy',function(d) { return 3*d.y;})
	.attr('cx',100)
	.attr('fill','steelblue');
 */



var yScale = d3.scale.linear()
	.domain([0, d3.max(d1,function(d){return d.y;}) ])
	.range([20,height-40]);
var axisScale = d3.scale.linear()
	.domain([0, d3.max(d1,function(d){return d.y;}) ])
	.range([height-40,20]);
/*
var r = svg.selectAll("rect")
	.data(d1)
	.enter()
	.append("rect")
	.attr('x',function(d,i) {return i*50+xPadding;})
	.attr('y',function(d) {return height - yScale(d.y)  - yPadding;})
	.attr('width',function (d,i,a) {return width / 7 - 10;})
	.attr('height',function(d) {return yScale(d.y)})
	.attr('fill','steelblue');



var t = svg.selectAll("y")
	.data(d1)
	.enter()
	.append("text")
	.attr('class','y')
	.attr('x',function(d,i) {return i*50+xPadding+10;})
	.attr('y',function(d) {return height - yScale(d.y)  - yPadding;})
	.attr('font-family','sans-serif')
	.attr('font-size','20px')
	.attr('fill','red')
	.text(function(d){return d.y;});


var l = svg.selectAll("label")
	.data(d1)
	.enter()
	.append("text")
	.attr('class','label')
	.attr('x',function(d,i) {return i*50+xPadding+10;})
	.attr('y',function(d) {return height- yPadding;})
	.attr('font-family','sans-serif')
	.attr('font-size','20px')
	.attr('fill','red')
	.text(function(d){return d.label;});

*/

var bars = svg.selectAll('.bars')
	.data(d1)
	.enter()
	.append('g')
	.attr('class','bars');

bars.append("rect")
    .attr('x',function(d,i) {return i*50+40;})
    .attr('y',function(d) {return height - yScale(d.y)  - yPadding;})
    .attr('width',function (d,i,a) {return width / 7 - 10;})
    .attr('height',function(d) {return yScale(d.y)})
    .attr('fill','steelblue');

bars.append('text')
	.attr('class','y')
	.attr('x',function(d,i) {return i*50+xPadding+40;})
	.attr('y',function(d) {return height - yScale(d.y)  - yPadding;})
	.attr('font-family','sans-serif')
	.attr('font-size','20px')
	.attr('fill','red')
	.text(function(d){return d.y;});

bars.append('text')
    .attr('class','label')
    .attr('x',function(d,i) {return i*50+xPadding+40;})
    .attr('y',function(d) {return height- yPadding;})
    .attr('font-family','sans-serif')
    .attr('font-size','20px')
    .attr('fill','red')
    .text(function(d){return d.label;});

var yAxis = d3.svg.axis()
	.scale(axisScale)
	.orient('left');

svg.append('g')
    .attr('class','axis')
    .attr('transform','translate(30,30)')
    .call(yAxis);
