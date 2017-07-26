/**
 * Created by Administrator on 2017/7/26.
 */


(function () {
    'use strict';
    
    angular.module('BlurAdmin.pages.myNewPage').controller('threePageCtrl',threePageCtrl);
    
    function threePageCtrl($scope,$http) {
        $http({
            method:"GET",
            url:'app/pages/myNewPage/threePage/threePageData.json',
            param:{}
        }).then(function sucess(response) {
            $scope.AAA = response.data;
            console.log(response.data);
        },function error() {
            console.log("失败了，不知道为啥");
        });
    }
    
})();