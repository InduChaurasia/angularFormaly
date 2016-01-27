(function() {

	'use strict';

	angularFormlyApp.controller('MainController', function($scope, province) {

		$scope.personDetails = {};
		$scope.personAddress = {};

	$scope.personFields = {
			step1: [
			{
			key : 'firstName',
			type : 'input',
			templateOptions : {
				type : 'text',
				label : 'First Name',
				placeholder : 'Enter your first name',
				required : true
			}
		}, {
			key : 'lastName',
			type : 'input',
			templateOptions : {
				type : 'text',
				label : 'Last Name',
				placeholder : 'Enter your last name',
				required : true
			}
		},

		 {
			key : 'email',
			type : 'input',
			templateOptions : {
				type : 'email',
				label : 'Email address',
				placeholder : 'Enter email',
				required : true
			}
		},

		{
		 key : 'dateOfBirth',
		 type : 'input',
		 templateOptions : {
			 type : 'date',
			 label : 'Date of birth',
			 placeholder : 'date of birth ',
			 required : true
		 	}
		},

		{
			key: 'height',
			type: 'input',
			templateOptions:{
				type: 'number',
				label: 'Height',
				placeholder: 'Enter height',
				required: true
			}
		},

		{
			key: 'weight',
			type: 'input',
			templateOptions:{
				type: 'number',
				label: 'Weight',
				placeholder: 'Enter weight',
				required: true
			}
	}


	],
 step2:[
	 	{
			key: 'address'
			type: 'textarea',
			templateOptions : {
				type: 'text',
				required: true,
				label: 'Full address',
				placeholder : 'Enter your full address',
			}
		},
		{
			key : 'province',
			type : 'typeahead',
			templateOptions : {
				label : 'Province',
				options : province.getProvinces()
			}
		}
	]
};

	})


})();
