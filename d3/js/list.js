
/* First just selecctall li and chagne texxt
 thenn select one list, change all li
 then transition it (background style)
then talk about data -- change then enter then exit
*/

d1=[1,222,333];



d3.select("#a").selectAll("li")
    .data(d1)
    .enter()
    .append("li")
    .text(function (d) {return d;});


d3.select("#a").selectAll("li")
    .append("li")
    .text(function (d) {return d;});
