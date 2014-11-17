angular.module('dragDropExampleApp')
  .controller('ScreenCtrl', function ($scope,$rootScope,$timeout,$location) {
  	$scope.tiles = $rootScope.data.widgets;
  	$scope.gridsterOptions = {
		margins: [15, 30],
		columns: 8,
		rowHeight:'*0.7',
		maxRows:4,
		draggable: {
			enabled:false
		},
		resizable:{
			enabled:false
		}
	};
/*  	for(var i=0;i<$scope.tiles.length;i++){
  		$scope.tiles[i].col
  	}
*/ });
