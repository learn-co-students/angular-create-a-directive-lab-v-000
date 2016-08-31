angular
  .module('app')
  .directive('errorMessage', ErrorMessage)

function ErrorMessage() {
  return {
    template: '<div>Oh no - something went wrong!</div>'
  }
};