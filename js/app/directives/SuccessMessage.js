function successMessage() {
  return  {
    template: "Success - it worked!";
  };
}


angular
  .module('app')
  .directive('successMessage', successMessage);