function SuccessMessage() {
  return {
    template: '<h2>Success - it worked!</h2>'
  };
}

angular
  .module('app')
  .directive('successMessage', SuccessMessage)
