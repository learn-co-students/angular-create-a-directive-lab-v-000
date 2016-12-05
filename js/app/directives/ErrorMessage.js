function ErrorMessage() {
    return {
        template: '<error-message>Oh no - something went wrong!</error-message>'
    };
}

angular
    .module('app')
    .directive('ErrorMessage', ErrorMessage);
