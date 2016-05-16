function SuccessMessage(){
  return {
    template: '<div>Success - it worked!</div>'
  };
}

angular
  .module('app')
  .directive('successMessage', SuccessMessage);

