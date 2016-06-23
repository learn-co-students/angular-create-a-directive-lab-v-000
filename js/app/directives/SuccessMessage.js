angular
  .module('app')
  .directive('successMessage', SuccessMessage);
  
function SuccessMessage() {
  return {
    template: 'Success - it worked!'
  };
}