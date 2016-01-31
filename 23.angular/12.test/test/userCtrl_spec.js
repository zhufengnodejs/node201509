(function(){
    describe('我要测试userCtrl',function(){
        var xx;
        beforeEach(module('zfMod'));
        beforeEach(inject(function($rootScope,$controller){
            xx = $rootScope.$new();
            $controller('userCtrl',{$scope:xx});
        }));
        it('看看title对不对',function(){
            console.log('xx',xx);
            expect(xx.title =='zfpx').toBeTruthy();
        });
    })
})()