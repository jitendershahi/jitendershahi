app.config(function ($stateProvider, $urlRouterProvider) {

    // If no matching route is found

    $urlRouterProvider.otherwise("/home");

    $stateProvider
        .state('index', {
            url: "/home",
            controller: 'HomeCtrl',
            controllerAs: 'homeCtrl',
            templateUrl: 'views/home.html',
            resolve: {
                getData: ['Country', function (Country) {
                    let result = Country.getCountries();
                    return result;
                }]
            }
        })
        .state('category', {
            url: "/home/category",
            controller: 'CategoryCtrl',
            controllerAs: 'categoryCtrl',
            templateUrl: 'views/category.html',
            params: {
                catbranch: null
            },
        })
        .state('subcategory', {
            url: "/home/category/subcategory",
            controller: 'SubCategoryCtrl',
            controllerAs: 'subCategoryCtrl',
            templateUrl: 'views/subcategory.html',
            params: {
                categ: null
            },
        })

        .state('explore', {
            url: "/explore",
            controller: 'ExploreCtrl',
            controllerAs: 'exploreCtrl',
            templateUrl: 'views/explore.html'
        })
        .state('about', {
            url: "/about",
            controller: 'AboutCtrl',
            controllerAs: 'aboutCtrl',
            templateUrl: 'views/about.html'
        })
        .state('otherwise', {
            url: "/otherwise",
            templateUrl: 'views/404.html'
        });
});