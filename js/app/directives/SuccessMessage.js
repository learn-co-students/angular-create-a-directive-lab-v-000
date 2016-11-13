function SuccessMessage() {
	return {
		template: 'Success - it worked!'
	};
}

angular
	.module('app')
	.directive('successMessage', SuccessMessage);

// We're going to have a success directive and an error directive. These should have templates inside them that have a message for when something succeeds, and when something fails. This means we can use the same language everywhere in our app just by referencing these two directives.
// They should be named successMessage and errorMessage so we can use them in Angular via <success-message></success-message> and <error-message></error-message>.
// Our success message directive should read "Success - it worked!". Our error message directive should read "Oh no - something went wrong!".