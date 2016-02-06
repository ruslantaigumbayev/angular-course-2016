(function() {
  'use strict';

  angular
    .module('angularCourse2016')
    .directive('acmeHome', acmeHome);

  /** @ngInject */
  function acmeHome() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/home/home.html',
      controller: HomeController,
      controllerAs: 'hc',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function HomeController() {

    }
  }

})();
