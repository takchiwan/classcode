


data = [
    {'label':'a','y': 80},
    {'label':'b','y': 10},
    {'label':'c','y': 30},
    {'label':'d','y': 05},
    {'label':'e','y': 35},
    {'label':'f','y': 48},
    {'label':'g','y': 70}
];



data2 = [
    {'label':'a','y': 35},
    {'label':'b','y': 30},
    {'label':'c','y': 20},
    {'label':'d','y': 22},
    {'label':'e','y': 20},
    {'label':'f','y': 10},
    {'label':'g','y': 20}
];


var width=800;
var height=400;
var padding=50;

var xScale = d3.scale.linear()
	.domain([0,100])
	.range([0,width]);
var yScale = d3.scale.linear()
	.domain([0,100])
	.range([0,height]);

var svg = d3.select("body").append("svg")
	.attr("width",width)
	.attr("height",height)
	.attr("id","svg");

var linef = d3.svg.line()
	.x(function (d,i){ return xScale(10*i);})
	.y(function (d){ return yScale(d.y);})
	.interpolate("cardinal"); // or linear

svg.selectAll("circle").data(data).enter().append("circle")
    .attr("cx",function(d,i){return xScale(10*i);})
    .attr("cy",function(d){return yScale(d.y);})
    .attr("r",10)
    .style("fill","green")

svg.append("path")
    .attr("d",linef(data))
    .attr("stroke","red")
    .attr("stroke-width",2)
    .attr("fill","none");

d3.select("#change").on('click',function(d) {
    svg.select("path")
	.transition()
	.duration(1000)
    .attr("d",linef(data2))
    .attr("stroke","red")
    .attr("stroke-width",2)
    .attr("fill","none");

    svg.selectAll("circle").data(data2)
	.transition()
	.duration(1000)
	.delay(function(d,i){return 1000*i;})
	.attr("cx",function(d,i){return xScale(10*i);})
	.attr("cy",function(d){return yScale(d.y);})
	.attr("r",10)
	.style("fill","green");
});

d3.select("#reset").on('click',function(d) {
    svg.select("path")
	.transition()
	.duration(1000)
    .attr("d",linef(data))
    .attr("stroke","red")
    .attr("stroke-width",2)
    .attr("fill","none");

    svg.selectAll("circle").data(data)
	.transition()
	.duration(1000)
	.attr("cx",function(d,i){return xScale(10*i);})
	.attr("cy",function(d){return yScale(d.y);})
	.attr("r",10)
	.style("fill","green");
});
