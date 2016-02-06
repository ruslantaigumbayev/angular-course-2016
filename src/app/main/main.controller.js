(function() {
  'use strict';

  angular
    .module('angularCourse2016')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($state) {
	  $state.go('main.home');
  }
})();
