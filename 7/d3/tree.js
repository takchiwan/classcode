treedata = {
name: 'softdev',
children : [
    {name: 'pd6',
    children: [
	{name:'Jane'},
	{name:'Zane'},
	{name:'Andrew'},
	{name:'Davud'},
	{name:'Kelvin'},
    ]},
    {name: 'pd7',
    children: [
	{name:'Ben'},
	{name:'Chris'},
	{name:'Marlena'},
	{name:'Judy'},
    ]}
]
};

var height=400, width=400;
var yPadding=10;
var xPadding=10;

var svg = d3.select("body").append('svg')
	.attr('width',width)
	.attr('height',height)
	.attr('id','svg')
	.style('border','solid px');

var tree = d3.layout.tree()
	.size([height-100,width-100]);

var nodes = tree.nodes(treedata);
console.log(nodes);

svg.selectAll(".nodes")
    .data(nodes)
    .enter()
    .append('circle')
    .attr('r',10)
    .attr('cx',function(d){return d.x;})
    .attr('cy',function(d){return d.y;})
    .attr('fill','steelblue');

var links = tree.links(nodes);
var diagonal = d3.svg.diagonal()
	.projection(function(d) { return [d.x, d.y]; });

svg.selectAll(".links")
    .data(links)
    .enter()
    .append('path')
    .attr('stroke-width','1px')
.attr('class','link')
    .attr('d',diagonal);
