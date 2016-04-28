  angular.module('myAPP', ['ngAnimate', 'ui.bootstrap']);
  angular.module('myAPP').controller('TabsDemoCtrl', function($scope) {

      $scope.open1 = function() {
          $scope.popup1.opened = true;
      };

      $scope.open2 = function() {
          $scope.popup2.opened = true;
      };

      $scope.setDate = function(year, month, day) {
          $scope.dt = new Date(year, month, day);
      };

      $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
      $scope.format = $scope.formats[0];
      $scope.altInputFormats = ['M!/d!/yyyy'];

      $scope.popup1 = {
          opened: false
      };

      $scope.popup2 = {
          opened: false
      };

      var tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      var afterTomorrow = new Date(tomorrow);
      afterTomorrow.setDate(tomorrow.getDate() + 1);
      $scope.events = [{
          date: tomorrow,
          status: 'full'
      }, {
          date: afterTomorrow,
          status: 'partially'
      }];


  });
