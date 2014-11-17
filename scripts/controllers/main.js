'use strict';

/**
 * @ngdoc function
 * @name dragDropExampleApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the dragDropExampleApp
 */
angular.module('dragDropExampleApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
        $scope.draggableObjects = [{name:'one'},{name:'two'}];
        $scope.droppedObjects1 = [];
        $scope.droppedObjects2= [];
        $scope.onDropComplete1=function(data,evt){
            var index = $scope.droppedObjects1.indexOf(data);
            $scope.droppedObjects1.push(data);
        }
        $scope.onDragSuccess1=function(data,evt){
            var index = $scope.droppedObjects1.indexOf(data);
            if (index > -1) {
                $scope.droppedObjects1.splice(index, 1);
            }
            console.log("drag"+data)
        }
       
        var inArray = function(array, obj) {
            var index = array.indexOf(obj);
        }

  });
