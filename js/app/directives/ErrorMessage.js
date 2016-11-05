function ErrorMessage() {
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
  .directive('errorMessage', ErrorMessage);