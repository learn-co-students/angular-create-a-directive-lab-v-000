function SuccessMessage() {
  return {
    template: '<p>Success - it worked!'
  };
}

angular
      .module('app')
      .directive('successMessage', SuccessMessage);
