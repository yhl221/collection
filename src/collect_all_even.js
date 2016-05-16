'use strict';

function collect_all_even(collection) {
  var newArrays=[];
    var k=0;
    for(var i=0;i<collection.length;i++)
        if(collection[i]%2===0)
            newArrays[k++]=collection[i];
    return newArrays;
}

module.exports = collect_all_even;
