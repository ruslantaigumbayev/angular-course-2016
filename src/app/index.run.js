(function() {
  'use strict';

  angular
    .module('angularCourse2016')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
