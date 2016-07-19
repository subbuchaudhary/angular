var myApp = angular.module("myModule",["ngRoute"]);
	myApp.config(["$routeProvider", function($routeProvider){
	    $routeProvider.when("/", { templateUrl: "Login.html", controller: "LoginController", title: "Login" })
                .when("/home", { templateUrl: "home.html", controller: "HomeController", title: "Home" })
				.when("/aboutus", { templateUrl: "aboutus.html", controller: "AboutController", title: "About Us" })
				.when("/contactus", { templateUrl: "contactus.html", controller: "contactController", title: "Contact Us" })
				.when("/ourproducts", { templateUrl: "ourproducts.html", controller: "ProductsController", title: "Our Products" })
				.otherwise("/home");
	}]);
	myApp.run(["$rootScope", function ($rootScope) {
	    $rootScope.$on("$routeChangeSuccess", function (event, current, previous) {
            $rootScope.mytitle = current.$$route.title
	    })
	}]);
	myApp.controller("myController", function($scope){
	});
	myApp.controller("AboutController", function ($scope) {

	});
	myApp.controller("HomeController", function($scope){
		$scope.myColor = "blue";
	});
	myApp.controller("contactController", function ($scope, $http, $log) {
	    $scope.displaydata = function () {
	        $http.get("http://services.groupkt.com/state/get/IND/all").success(function (data) {
	            $scope.statesInfo = data.RestResponse.result;
	            $log.info(data);
	        }).error(function () {
	            alert("error");
	        });
	    }
	});
	myApp.controller("ProductsController", function ($scope, $http) {
	    $http.get("data.json").success(function (data) {
	        $scope.employeeInfo = data.employeeslist.employees;
	    }).error(function () {
	        alert("error");
	    })
	});
	myApp.controller("LoginController", function ($scope, $location, $http) {
	    $http.get("data.json").success(function (data) {
	        $scope.myLogins = data.employeeslist.employees;
	    }).error(function () {
	        alert("error");
	    });
	    $scope.myLogin = function () {
	        //var error = false;
	        for (var i = 0; i < $scope.myLogins.length; i++) {
	            if ($scope.username == $scope.myLogins[i].name && $scope.password == $scope.myLogins[i].name) {
	                //error = false;
	                $location.path("/home");
	            }
	            //else {
	            //    error = true;
	            //}
	        }
	    }
	});
	    //$scope.myLogin = function () {
	    //    if ($scope.username == "subbu" && $scope.password == "don"){
	    //        $location.path("/home");
	//    }
	//else{
    //    alert("invalid login");
	//}
	//}
	//})