function SuccessMessage() {
    return {
        template: '<success-message>Success - it worked!</success-message>'
    };
}

angular
    .module('app')
    .directive('SuccessMessage', SuccessMessage);
