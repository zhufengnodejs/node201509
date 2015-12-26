/**
 * nexttick
 *
 */
console.log('a客人');

setTimeout(function(){
    console.log('a扫地 setTimeout');
},0);
process.nextTick(function(){
    console.log('a扫地 nextTick');
    process.nextTick(function(){
        console.log('a扫地 nextTick2');
        process.nextTick(function(){
            console.log('a扫地 nextTick3');
        });
    });
});

console.log('b厨师');
console.log('c厨师');

