  app.factory('countryService', ['$http','$q','$log',function($http,$q,$log) {

    var urlBase = 'https://api.myjson.com/bins/16ywpx';
    var dataList = {};

    dataList.getRestraList = function () {
        return $http.get(urlBase).then(function(response) {
			response = response.data;
                        return response;
  })
  }
	return dataList;
  }]);