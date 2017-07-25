/**
 * Created by seven on 2017/6/9.
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.myNewPage',[])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('myNewPage', {
                url: '/myNewPage',
                template: '<ui-view  autoscroll="true" autoscroll-body-top></ui-view>',
                abstract: true,
                title: 'My New Page',
                sidebarMeta: {
                    icon: 'ion-android-laptop',
                    order: 800
                }
            }).state('myNewPage.firstPage',{
                url:'/firstPage',
                templateUrl:'app/pages/myNewPage/firstPage/firstPage.html',
                controller:'firstPageCtrl',
                title:'firstPage',
                sidebarMeta: {
                    order: 0
                }
            }

        );
    }

})();