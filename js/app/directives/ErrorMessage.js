function ErrorMessage() {
  return {

    template: '<h1>Oh no - something went wrong!</h1>'
  };
}

angular
.module('app')
.directive('errorMessage', ErrorMessage);
