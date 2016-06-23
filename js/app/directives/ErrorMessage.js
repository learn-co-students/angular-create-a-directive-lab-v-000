function ErrorMesage(){
  return {template:
    '<div class="error">Oh no - something went wrong!</div>'
  };
};

angular
  .module('app')
  .directive('errorMessage', ErrorMesage)