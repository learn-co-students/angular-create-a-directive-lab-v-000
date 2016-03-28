(function(app){

  app.directive('errorMessage', ErrorMessage);

  function ErrorMessage(){
    return {
      template: '<div>Oh no - something went wrong!</div>'
    }
  };

})(angular.module('app'));