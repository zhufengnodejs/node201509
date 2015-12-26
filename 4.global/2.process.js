process.argv.forEach(function(val,index,array){
    console.log(val,index,array);
});

process.kill(1860);