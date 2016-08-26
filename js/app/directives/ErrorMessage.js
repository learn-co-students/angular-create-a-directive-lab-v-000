function ErrorMessage() {
  return {
    template: '<span>Oh no - something went wrong!</span>'
  };

}

angular
  .module('app')
  .directive('errorMessage', ErrorMessage);
