(function(app){

  app.directive('successMessage', SuccessMessage);

  function SuccessMessage(){
    return {
      template: '<div>Success - it worked!</div>'
    }
  };

})(angular.module('app'))