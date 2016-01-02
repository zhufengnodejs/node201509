function fun1(){
    var a1 = 1;
    console.log('fun1',a1);
    function fn2(){
        var a2 = 2;
        console.log('fn2',a1,a2);
        function fn3(){
            var a3 = 3;
            console.log('fn2',this.name,a1,a2,a3);
        }
        fn3.call({name:'zfpx'});
        //fn3();
    }
    fn2();
    console.log(this,'over');
}
fun1();