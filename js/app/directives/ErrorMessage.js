function ErrorMessage(){
  return {
    template: "<p>Oh no - something went wrong!</p>"
  }
}

angular
  .module('app')
  .directive('errorMessage', ErrorMessage);