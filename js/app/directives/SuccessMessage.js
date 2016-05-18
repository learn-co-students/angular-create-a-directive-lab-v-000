function SuccessMessage(){
  return {
    template: 'Success - it worked!'
  };
}

angular
  .module('app')
  .directive('successMessage', SuccessMessage)