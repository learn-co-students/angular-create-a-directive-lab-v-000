function ErrorMessage() {
  return {
    template: '<h2>Oh no - something went wrong!</h2>'
  }
}

angular
  .module('app')
  .directive('errorMessage', ErrorMessage)
