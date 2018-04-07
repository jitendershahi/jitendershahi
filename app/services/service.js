app.factory('Country', ['$q', '$http', function ($q, $http) {

    var oCalService = {};

    oCalService.getCountries = function () {
        let result = $http.get('../data/catalog.json');
        return result;
    }
    return oCalService;

}]);