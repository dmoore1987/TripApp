app.factory('LoginService', ['$http', '$q', '$window', function ($http, $q, $window) {
    var callbacks = [];

    var processLogin = function (username, password) {
        //console.log(username + password);
        var deferred = $q.defer();
        $http({
            url: '/Token',
            method: 'POST',
            data: 'username=' + username + "password=" + password + "&grant_type=password",
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        }).success(function (data) {
            console.log(data);
            $window.sessionStorage.setItem('token', data.access_token);
            $window.sessionStorage.setItem('username', data.UserName);
            console.log(data.UserName);
            deferred.resolve(data.UserName);
        }).error(function (data) {
            deferred.reject(data);
            return deferred.promise;
        });
    }
        var isLoggedIn = function () {
            return $window.sessionStorage.getItem('username');
            var logout = function () {
                $window.sessionStorage.removeItem('token');
                $window.sessionStorage.removeItem('username');
                
            }
    
        }
        return {
            processLogin: processLogin
        }

}]);
