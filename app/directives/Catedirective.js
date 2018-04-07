app.directive('branchCard', ['$state', function ($state) {
  return {
    templateUrl: "../../views/branchCard.html",
    restrict: "E",
    scope: {
      location: '='
    },
    controller: function ($scope) {
      $scope.showCategory = function (branch) {
        $state.go('category', { catbranch: branch });
      }
    },
    controllerAs:'branchDCtrl' 
  }
}]);