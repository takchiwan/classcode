

d3.csv("grades.csv",function(d) {makeSVG(d)});

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

var avgs = ['overall','history','english','math'];
var selected=0;
var width=800;
var height=400;
var svg;
var circles;

var xScale = d3.scale.linear()
	.domain([0,900])
	.range([50,width-10]);
var yScale = d3.scale.linear()
	.domain([0,100])
	.range([height-10,10]);


var makeSVG = function(d) {
    console.log(d);
    svg = d3.select("body").append("svg")
	.attr("width",width)
	.attr("height",height)
	.style("border","solid 1px")
	.attr("id","svg")

    circles = svg.selectAll("circle")
	.data(d)
	.enter()
	.append("circle")
	.attr("cx",function(d,i){return xScale(i);})
	.attr("cy",function(d){return yScale(d[avgs[selected]]);})
	.attr("fill",getRandomColor)
	.attr("r",5);

    var yAxis = d3.svg.axis().scale(yScale).orient("left");
    svg.append("g").attr("class","axis")
	.attr("transform","translate(30,0)")
	.call(yAxis);

    // interface
    var iface = d3.select("#interface");
    var s = iface.append("select").attr("id","selector");
    for (var i =0; i < avgs.length;i++) {
	s.append("option")
	    .attr("value",avgs[i])
	    .attr("name",avgs[i])
	    .text(avgs[i]);
    }

    s.on("change",function(e) {
	var x = document.getElementById("selector");
	//var choice = (x.options[x.selectedIndex].value);
	choice = x.selectedIndex;
	d3.selectAll("circle")
	    .transition()
	    .duration(2000)
	    .attr("cy",function(d){return yScale(d[avgs[choice]]);})
    })


    
        
}
