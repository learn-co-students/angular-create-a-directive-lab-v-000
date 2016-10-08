function SuccessMessage() {
  return {
    template: '<div><p>Success - it worked!</p></div>'
  };
}

angular
  .module('app')
  .directive('successMessage', SuccessMessage);
