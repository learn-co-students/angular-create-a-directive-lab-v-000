function ErrorMessage() {
  return {
    template: 'Oh no - something went wrong!'
  };
}

angular
  .module('app')
  .directive('errorMessage', ErrorMessage);