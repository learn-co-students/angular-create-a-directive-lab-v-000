function SuccessMessage(){
  return {
    template: "<p>Success - it worked!</p>"
  }
}

angular
  .module('app')
  .directive('successMessage', SuccessMessage);