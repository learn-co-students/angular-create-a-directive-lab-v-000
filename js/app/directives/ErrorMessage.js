function errorMessage () {
  return {
    template: "Oh no - something went wrong!"
  };
}

angular
  .module('app')
  .directive('errorMessage', errorMessage);