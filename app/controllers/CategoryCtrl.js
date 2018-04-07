app.controller('CategoryCtrl', ['$scope', '$state', '$stateParams', function ($scope, $state, $stateParams) {
    var categoryCtrl = this;

    categoryCtrl.branch = $stateParams.catbranch;


    $scope.showSubCategory = function (category) {
        $state.go('subcategory', { categ: category });
    }

}]);

