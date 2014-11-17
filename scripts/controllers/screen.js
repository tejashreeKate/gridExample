angular.module('dragDropExampleApp')
  .controller('ScreenCtrl', function ($scope,$rootScope,$timeout,$location) {
  	$scope.tiles = $rootScope.data.widgets;
  	$scope.gridsterOptions = {
		margins: [10, 30],
		columns: 8,
		rowHeight:'*0.5',
		maxRows:6,
		draggable: {
			enabled:false,
			handle: '.box'
		},
		resizable:{
			enabled:false
		}
	};
/*  	for(var i=0;i<$scope.tiles.length;i++){
  		$scope.tiles[i].col
  	}
*/ });
