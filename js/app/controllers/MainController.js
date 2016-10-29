function MainController($scope) {
  $scope.contact = {
    name: 'Kris Henderson',
    email: 'krishenderson@gmail.com',
    phone: '9402312222'
  };
  
}
angular
  .module('app')
  .controller('MainController', MainController);