function ErrorMessage(){
  return {
    template: '<div>Oh no - something went wrong!</div>'
  };
}

angular
  .module('app')
  .directive('ErrorMessage', ErrorMessage);