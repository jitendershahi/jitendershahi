app.controller('SubCategoryCtrl', ['$scope', '$state', '$stateParams', function ($scope, $state, $stateParams) {

    var subCategoryCtrl = this;
    subCategoryCtrl.category = $stateParams.categ;


}]);