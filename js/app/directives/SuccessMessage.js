function SuccessMessage() {
  return {
    template: '<div class="success">Success - it worked!</div>'
  }
}

angular
  .module('app')
  .directive('successMessage', SuccessMessage)