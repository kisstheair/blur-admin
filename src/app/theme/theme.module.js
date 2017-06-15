/**
 * @author v.lugovsky
 * created on 15.12.2015    在这里定义BlurAdmin.theme 模块      同时依赖 BlurAdmin.theme.components 和BlurAdmin.theme.inputs  模块
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.theme', [
      'toastr',
      'chart.js',
      'angular-chartist',
      'angular.morris-chart',
      'textAngular',
      'BlurAdmin.theme.components',
      'BlurAdmin.theme.inputs'
  ]);

})();
