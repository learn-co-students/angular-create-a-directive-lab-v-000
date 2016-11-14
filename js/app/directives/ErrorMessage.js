function errorMessage() {
	return {
		template: '<div>Oh no - something went wrong!</div>'
	};
}

angular
	.module('app')
	.directive('errorMessage', errorMessage);