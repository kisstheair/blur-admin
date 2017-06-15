
/*
 * 这里定义主模块的地方   名字 BlurAdmin
 *
 *                  路由就用ui.router
 *                  自己写的模块就  BlurAdmin.theme  和BlurAdmin.pages  像 目录结构一样  只有 pages 和theme两个目录 那就两个模块
 *
 * */
'use strict';

angular.module('BlurAdmin', [
  'ngAnimate',
  'ui.bootstrap',
  'ui.sortable',
  'ui.router',
  'ngTouch',
  'toastr',
  'smart-table',
  "xeditable",
  'ui.slimscroll',
  'ngJsTree',
  'angular-progress-button-styles',

  'BlurAdmin.theme',
  'BlurAdmin.pages'
]);