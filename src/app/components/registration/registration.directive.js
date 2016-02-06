(function() {
  'use strict';

  angular
    .module('angularCourse2016')
    .directive('acmeRegistration', acmeRegistration);

  /** @ngInject */
  function acmeRegistration() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/registration/registration.html',
      controller: RegistrationController,
      controllerAs: 'rc',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function RegistrationController() {

    }
  }

})();
