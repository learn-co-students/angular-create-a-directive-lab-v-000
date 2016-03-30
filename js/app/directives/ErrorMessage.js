function errorMessage () {
  return {
    template: [
      '<div>',
      'Oh no - something went wrong!',
      '</div>'
      ].join('')
  }
}

angular
  .module('app')
  .directive('errorMessage', errorMessage)