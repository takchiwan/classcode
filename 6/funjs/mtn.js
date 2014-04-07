/* we don't really need zip. We can use map instead
var d2 = _.map(mtnrange,function(item,i,l){
    return [].concat(l[i],l[i+1]);
});
*/

var mtnrange = [20,30,33,40,50,40,20,70,50,110,45];

var difflist = _.zip(mtnrange,mtnrange.slice(1));

// remove the last element
difflist = _.take(difflist,difflist.length-1);

// combine the diffs into single values
diffs = _.map(difflist, function(item){
    return Math.abs(item[1]-item[0]);
});

// filter so we only have items > 30
bigdiffs = _.filter(diffs,function(n){
    return n>=30;
});
//console.log(bigdiffs.length);



var myzip1 = function(l) {
    var tmp = _.zip(l,l.slice(1));
    return _.take(tmp,tmp.length-1);
}

var zipc = _.curry(function(a,b){
    return _.zip(a,b);
})
