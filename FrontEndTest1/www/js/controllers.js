angular.module('starter.controllers', [])

.controller('DashCtrl', function ($scope, $http) {
        
    $http.get('https://api.500px.com/v1/photos?feature=user&username=Basel&consumer_key=QplDFmghXKQaRQWNI6gnUWZ15ErCnj9IN98uuvqA').then(function (resp) {
        console.log('Success', resp);
        $scope.response = resp.data;
        // For JSON responses, resp.data contains the result
    }, function(err) {
        console.error('ERR', err);
        // err.status will contain the status code
    })

})

.controller('FavCtrl', function ($scope, $http) {
    $http.get('https://api.500px.com/v1/photos?feature=user_favorites&username=Basel&consumer_key=QplDFmghXKQaRQWNI6gnUWZ15ErCnj9IN98uuvqA').then(function (resp) {
        console.log('Success', resp);
        $scope.response = resp.data;
        // For JSON responses, resp.data contains the result
    }, function (err) {
        console.error('ERR', err);
        // err.status will contain the status code
    })
})

.controller('FriendsCtrl', function ($scope, $http) {
    
    $http.get('https://api.500px.com/v1/photos?feature=user_friends&username=Basel&consumer_key=QplDFmghXKQaRQWNI6gnUWZ15ErCnj9IN98uuvqA').then(function (resp) {
        console.log('Success', resp);
        $scope.response = resp.data;
        // For JSON responses, resp.data contains the result
    }, function (err) {
        console.error('ERR', err);
        // err.status will contain the status code
    })
});
