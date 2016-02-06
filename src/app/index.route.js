(function() {
	'use strict';

	angular
			.module('angularCourse2016')
			.config(routerConfig);

	/** @ngInject */
	function routerConfig($stateProvider, $urlRouterProvider) {
		$stateProvider
				.state('main', {
					url: '/',
					templateUrl: 'app/main/main.html',
					controller: 'MainController',
					controllerAs: 'main'
				})
				.state('main.home', {
					url: "home",
					sticky: true,
					templateUrl: "app/components/home/home.html"
				})
				.state('main.registration', {
					url: "registration",
					sticky: true,
					templateUrl: "app/components/registration/registration.html"
				});

		$urlRouterProvider.otherwise('/');
	}

})();
