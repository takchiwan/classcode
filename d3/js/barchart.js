console.log("HELLO");

griddata = [ 5,10,30,15,35,30,12];

griddata2 = [ 35,30,20,22,20,10,20];


d3.select("#svg")
    .selectAll("rect")
    .data(griddata).
    enter().append("rect")
    .attr("width","40")
    .attr("height",function(d){ return 10*d;})
    .attr("y",function(d) {return 390-10*d;})
    .attr("x",function(d,i){return 50*i+10;})
    .attr("fill","#0000ff")

d3.select("#svg").selectAll("text")
    .data(griddata)
    .enter()
    .append("text")
    .attr("x",function(d,i) {return 50*i+10;})
    .attr("y",function(d){return 390-10*d;})
    .attr("font-family","sans-serif")
    .attr("font-size","11px")
    .attr("fill","#ff0000")
    .text(function(d) {return d;});



var svg = d3.select("#svg");
svg.selectAll("rect")
    .data(griddata2)
    .transition()
    .attr('y',function(d){return 390-10*d;})
    .attr("height",function(d){ return 10*d;})
    .attr("fill","#00ffff")
    .duration(10000)
    .delay(2000);


d3.select("#svg").selectAll("text")
    .data(griddata2)
    .transition()
    .attr("x",function(d,i) {return 50*i+10;})
    .attr("y",function(d){return 390-10*d;})
    .attr("font-family","sans-serif")
    .attr("font-size","11px")
    .attr("fill","#ff0000")
    .text(function(d) {return d;})
    .duration(10000)
    .delay(2000);
