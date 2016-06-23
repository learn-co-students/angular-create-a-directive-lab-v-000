angular 
  .module('app')
  .directive('errorMessage', ErrorMessage);
  
function ErrorMessage() {
  return {
    template: 'Oh no - something went wrong!'
  };
}