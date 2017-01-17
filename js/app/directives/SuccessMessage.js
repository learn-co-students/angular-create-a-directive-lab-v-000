function SuccessMessage() {
  return {
    template: '<h1>Success - it worked!</h1>'
  };
}

angular
.module('app')
.directive('successMessage', SuccessMessage);
