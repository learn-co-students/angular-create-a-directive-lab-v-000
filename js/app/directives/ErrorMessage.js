angular.module('app')
  .directive('errorMessage', function () {
    return {
      template: 'Oh no - something went wrong!'
    }
  })
