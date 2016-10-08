function ErrorMessage() {
  return {
    template: '<div><p>Oh no - something went wrong!</p></div>'
  };
}

angular
  .module('app')
  .directive('errorMessage', ErrorMessage);
