app.controller('HomeCtrl', ['$state', 'Country', 'getData', function ($state, Country, getData) {
    var homeCtrl = this;
    homeCtrl.country = {};
    homeCtrl.data = getData.data[0].data.locations;

}]);




























