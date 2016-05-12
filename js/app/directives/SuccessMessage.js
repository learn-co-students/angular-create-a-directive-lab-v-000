function SuccessMessage () {
  return {
    template: '<div class="success-message message">Success - it worked!</div>'
  }
}

angular
  .module('app')
  .directive('successMessage', SuccessMessage);