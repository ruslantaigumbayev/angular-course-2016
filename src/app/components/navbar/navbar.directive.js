(function() {
  'use strict';

  angular
    .module('angularCourse2016')
    .directive('acmeNavbar', acmeNavbar);

  /** @ngInject */
  function acmeNavbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      controller: NavbarController,
      controllerAs: 'nc',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function NavbarController() {
    }
  }

})();
