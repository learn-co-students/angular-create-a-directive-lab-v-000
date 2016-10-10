function SuccessMessage() {
  return {
    template: [
              '<div>',
                  'Success - it worked!',
                '</div>'
              ].join('')
  }
}

angular
  .module('app')
  .directive('successMessage', SuccessMessage)