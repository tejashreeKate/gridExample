'use strict';

/**
 * @ngdoc function
 * @name dragDropExampleApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the dragDropExampleApp
 */
angular.module('dragDropExampleApp')
  .controller('AboutCtrl', function ($scope,$timeout,$location,$rootScope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    	$scope.gridsterOptions1 = {
			margins: [20, 20],
			columns: 8,
			maxRows:4,
			draggable: {
				enabled:true,
				handle:'.box'
			},
			resizable:{
				handles:[]
			}
		};
		$scope.dashboards = {
			'1': {
				id: '1',
				name: 'Home',
				widgets: [{
					col: 0,
					row: 0,
					sizeY: 1,
					sizeX: 1,
					size:'2',
					name: "Widget 1"
				}, {
					col: 2,
					row: 1,
					sizeY: 1,
					sizeX: 1,
					size:'1',
					name: "Widget 2"
				}]
			}
		};

		$scope.clear = function() {
			$scope.dashboard.widgets = [];
		};

		$scope.addWidget = function() {
			$scope.dashboard.widgets.push({
				name: "New Widget",
				sizeX: 2,
				sizeY: 1,
				size:'3'
			});
			console.log($scope.dashboard.widgets)
		};
		$scope.saveScreen = function(){
			console.log($scope.dashboard)
			$location.path('/screen');
			$rootScope.data = $scope.dashboard;
		}
		$scope.$watch('selectedDashboardId', function(newVal, oldVal) {
			if (newVal !== oldVal) {
				$scope.dashboard = $scope.dashboards[newVal];
			} else {
				$scope.dashboard = $scope.dashboards[1];
			}
		});

		// init dashboard
		$scope.selectedDashboardId = '1';

  })
.controller('CustomWidgetCtrl', ['$scope', '$modal',
	function($scope, $modal) {

		$scope.remove = function(widget) {
			$scope.dashboard.widgets.splice($scope.dashboard.widgets.indexOf(widget), 1);
		};
		
		$scope.openSettings = function() {
			$scope.tile ={};
			$scope.tile = {
				name: "New Widget",
				sizeX: 2,
				sizeY: 2,
				size:'3'
			};
			var widget = $scope.tile;
			console.log($scope.tile)
			//widget = $scope.tile;
			$modal.open({
				scope: $scope,
				templateUrl: 'views/partials/widget_settings.html',
				controller: 'WidgetSettingsCtrl',
				resolve: {
					widget: function() {
						return widget;
					}
				}
			});
		};

	}
])

.controller('WidgetSettingsCtrl', ['$scope', '$timeout', '$rootScope', '$modalInstance', 'widget',
	function($scope, $timeout, $rootScope, $modalInstance, widget) {
		//console.log(widget)
		$scope.widget = widget;
		$scope.form = {
			name: widget.name,
			size:widget.size,
			sizeX: widget.sizeX,
			sizeY: widget.sizeY,
			col: widget.col,
			row: widget.row
		};

		$scope.sizes = {
			'1':{
				id:'1',
				name:'small',
				sizeX:1,
				sizeY:1
			},
			'2':{
				id:'2',
				name:'medium',
				sizeX:2,
				sizeY:1
			},
			'3':{
				id:'3',
				name:'large',
				sizeX:2,
				sizeY:2
			}
		}

		$scope.dismiss = function() {
			$modalInstance.dismiss();
		};

		$scope.remove = function() {
			console.log("remove")
			$scope.dashboard.widgets.splice($scope.dashboard.widgets.indexOf(widget), 1);
			$modalInstance.close();
		};

		$scope.submit = function() {
			angular.extend(widget, $scope.form);
			$scope.dashboard.widgets.push($scope.form);
			console.log($scope.dashboard.widgets)
			$modalInstance.close(widget);
		};
		$scope.changeSize = function (val){
			$scope.size = $scope.sizes[val];
			$scope.form = {
				name: widget.name,
				size:$scope.size.id,
				sizeX: $scope.size.sizeX,
				sizeY: $scope.size.sizeY,
				col: widget.col,
				row: widget.row
			};
		}


	}
])

// helper code
.filter('object2Array', function() {
	return function(input) {
		var out = [];
		for (var i in input) {
			out.push(input[i]);
		}
		return out;
	}
});


