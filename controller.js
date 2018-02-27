var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http)  {
  console.log("Angular is linked properly");

  var refresh = function() {
    $http.get('/contactlist').then(function(response) {
      console.log("I got the data I requested");
      $scope.contactlist = response.data;
      $scope.contact = null;
    });
  };

refresh();

  $scope.addContact = function() {
    console.log($scope.contact);
    $http.post('/contactlist', $scope.contact).then(function(response){
      console.log(response);
        refresh();
      });
    };

    $scope.remove = function(id) {
      console.log(id);
      $http.delete('/contactlist/' + id).then(function(response) {
        refresh();
      });
    };

    $scope.edit = function(id) {
      console.log(id);
      $http.get('/contactlist/' + id).then(function(response) {
        $scope.contact = response.data;
      });
    };

    $scope.update = function(id) {
      console.log($scope.contact._id);
      $http.put('/contactlist/' + $scope.contact._id, $scope.contact).then(function(response) {
        refresh();
        });
    };
});
