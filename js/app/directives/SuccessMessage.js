angular
  .module('app')
  .directive('successMessage', SuccessMessage)

function SuccessMessage() {
  return {
    template: '<div>Success - it worked!</div>'
  }
};