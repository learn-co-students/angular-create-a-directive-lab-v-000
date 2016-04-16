function errorMessage(){
  return{
    template: 'Oh no - something went wring!'
  };
}

angular
  .module('app')
  .directive('errorMessage', errorMessage);
