console.log("HELLO");

griddata = [
    {'label':'a','x': 5},
    {'label':'b','x': 10},
    {'label':'c','x': 30},
    {'label':'d','x': 15},
    {'label':'e','x': 35},
    {'label':'f','x': 30},
    {'label':'g','x': 12}
];


griddata2 = [
    {'label':'a','x': 35},
    {'label':'b','x': 30},
    {'label':'c','x': 20},
    {'label':'d','x': 22},
    {'label':'e','x': 20},
    {'label':'f','x': 10},
    {'label':'g','x': 20}
];


    d3.select("#svg")
    .selectAll("rect")
    .data(griddata).
    enter().append("rect")
    .attr("width","40")
    .attr("height",function(d){ return 10*d.x;})
    .attr("y",function(d) {return 390-10*d.x;})
    .attr("x",function(d,i){return 50*i+10;})
    .attr("fill","#0000ff");

d3.select("#svg").selectAll("text")
    .data(griddata)
    .enter()
    .append("text")
    .attr("x",function(d,i) {return 50*i+10;})
    .attr("y",function(d){return 390-10*d.x;})
    .attr("font-family","sans-serif")
    .attr("font-size","11px")
    .attr("fill","#ff0000")
    .text(function(d) {return d.x;})

var svg = d3.select("#svg");

svg.append("g").attr("id","labels");

svg.select("#labels").selectAll("text")
    .data(griddata)
    .enter()
    .append("text")
    .attr("x",function(d,i) {return 50*i+20;})
    .attr("y",390)
    .attr("font-family","sans-serif")
    .attr("font-size","11px")
    .attr("fill","#00ff00")
    .text(function(d) {return d.label;});



svg.selectAll("rect")
    .data(griddata2)
    .transition()
    .attr('y',function(d){return 390-10*d.x;})
    .attr("height",function(d){ return 10*d.x;})
    .attr("fill","#00ffff")
    .duration(10000)
    .delay(2000);


d3.select("#svg").selectAll("text")
    .data(griddata2)
    .transition()
    .attr("x",function(d,i) {return 50*i+10;})
    .attr("y",function(d){return 390-10*d.x;})
    .attr("font-family","sans-serif")
    .attr("font-size","11px")
    .attr("fill","#ff0000")
    .text(function(d) {return d.x;})
    .duration(10000)
    .delay(2000);
