// They should be named successMessage and errorMessage 
// so we can use them in Angular via <success-message></success-message> 
// and <error-message></error-message>.

// Our success message directive should read "Success - it worked!". 
// Our error message directive should read "Oh no - something went wrong!".

function ErrorMessage(){
  return{
    template: '<p>Oh no - something went wrong!</p>'
  };

}

angular
  .module('app')
  .directive('errorMessage', ErrorMessage);