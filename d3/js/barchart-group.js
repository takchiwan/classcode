
console.log("HELLO");

griddata = [
    {'label':'a','y': 80},
    {'label':'b','y': 10},
    {'label':'c','y': 30},
    {'label':'d','y': 15},
    {'label':'e','y': 35},
    {'label':'f','y': 48},
    {'label':'g','y': 70}
];


griddata2 = [
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
	.range([height,0]);
var yAxis = d3.svg.axis().scale(yScale).orient("left");


var svg = d3.select("body").append("svg")
	.attr("width",width)
	.attr("height",height)
	.attr("id","svg")
	.append("g")
	.attr("transform","translate(40,-20)")
	.call(yAxis);




svg.selectAll(".bars")
    .data(griddata)
    .enter()
    .append("g")
    .attr("transform","translate(40,0)")
    .attr("class","bars")
;
	  

svg.selectAll(".bars")
    .append("rect")
    .attr("width","40")
    .attr("x",function(d,i){return xScale(i*10);})
    .attr("y",function(d) {return yScale(d.y)})
    .attr("height",function(d){ return height-yScale(d.y);})
    .attr("fill","#0000ff");
    

svg.selectAll(".bars")
    .append("text")
    .attr("x",function(d,i) {return xScale(i*10);})
    .attr("y",function(d){return yScale(d.y);})
    .attr("font-family","sans-serif")
    .attr("font-size","11px")
    .attr("fill","#ff0000")
    .text(function(d) {return d.y;})
 
svg.selectAll(".bars")
    .append("text")
    .attr("transform","translate(-60,20)")
    .attr("x",function(d,i) {return padding+20+xScale(i*10);})
    .attr("y",390)
    .attr("font-family","sans-serif")
    .attr("font-size","15px")
    .attr("fill","#000000")
    .text(function(d) {return d.label;});

/*
svg.selectAll(".bars")
    .transition()
    .duration(2000)
    .attr("transform",function(d,i){
	return "translate("+10*d.y+")";});

*/

/*
    .attr("x",function(d,i){return padding+10+xScale(i*10);})
    .attr("y",function(d) {return yScale(d.y)})
    .attr("id",function(d){return d.label;})


    enter().append("rect")
    .attr("width","40")
    .attr("height",function(d){ return height-yScale(d.y);})
    .attr("x",function(d,i){return padding+10+xScale(i*10);})
    .attr("y",function(d) {return yScale(d.y)})
    .attr("id",function(d){return d.label;})
    .attr("fill","#0000ff");

svg.selectAll("text")
    .data(griddata)
    .enter()
    .append("text")
    .attr("x",function(d,i) {return padding+15+xScale(i*10);})
    .attr("y",function(d){return yScale(d.y)-5;})
    .attr("font-family","sans-serif")
    .attr("font-size","11px")
    .attr("fill","#ff0000")
    .text(function(d) {return d.y;})

svg.append("g").attr("id","labels");
svg.select("#labels").selectAll("text")
    .data(griddata)
    .enter()
    .append("text")
    .attr("x",function(d,i) {return padding+20+xScale(i*10);})
    .attr("y",390)
    .attr("font-family","sans-serif")
    .attr("font-size","15px")
    .attr("fill","#000000")
    .text(function(d) {return d.label;});



d3.select("#reset").on('click',function(d) {
    svg.selectAll("rect")
	.data(griddata)
	.transition()
	.duration(1000)
	.attr("y",function(d) {return yScale(d.y)})
	.attr("height",function(d){ return height-yScale(d.y);})
    
    ;

});

d3.select("#change").on('click',function(d) {
    svg.selectAll("rect")
	.data(griddata2)
	.transition()
	.duration(1000)
	.attr("y",function(d) {return yScale(d.y)})
	.attr("height",function(d){ return height-yScale(d.y);})
    
    ;

});
*/
