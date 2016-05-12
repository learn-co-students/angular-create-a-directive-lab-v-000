function ErrorMessage () {
  return {
    template: '<div class="error-message message">Oh no - something went wrong!</div>'
  }
}

angular
  .module('app')
  .directive('errorMessage', ErrorMessage);