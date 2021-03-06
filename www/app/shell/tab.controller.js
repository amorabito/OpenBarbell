(function(angular) {
	angular
		.module('shell')
		.controller('TabController', TabController);

	TabController.$inject = ['$scope', '$window', 'settingsService', 'rfduinoService'];
	function TabController($scope, $window, settingsService, rfduinoService) {
		var vm = this;

		vm.selectedIndex = 0;

		vm.enableBluetooth = function() {
			vm.selectedIndex = 2;
			$scope.$broadcast('enableBluetooth', {});
		};

		vm.scanDevices = function() {
			vm.selectedIndex = 2;
			$scope.$broadcast('scanDevices', {});
		};

		vm.checkConnection = function() {
			$scope.$broadcast('checkConnectionStatus', {});
		};

		vm.syncSettings = function() {
			$scope.$broadcast('syncSettings', {});
		};
		
		$scope.$on('focusTab', function(event, args) {
			if (vm.selectedIndex !== args.index) {
				vm.selectedIndex = args.index;
			}
		});

		/****************** Cordova Events ******************/

		// Check status of bluetooth once plug-in is detected
//		var unbindWatcher = $scope.$watch(function() {
//			return $window.rfduino;
//		},
//		function(newValue, oldValue) {
//			if (newValue !== undefined) {
//				$scope.$broadcast('checkConnectionStatus', {});
//				
//				settingsService.initializeSettings()
//				.then(function() {
//					rfduinoService.initializeDevice();
//				});
//				
//				unbindWatcher();
//			}
//		});
	};
})(angular);
