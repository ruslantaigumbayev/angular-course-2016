(function() {
  'use strict';

  angular
    .module('angularCourse2016')
    .run(runBlock);

  /** @ngInject */
  function runBlock($state, $log) {

	$state.go('main.home');
    $log.debug('runBlock end');
  }

})();
