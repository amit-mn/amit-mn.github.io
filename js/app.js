(function(angular) {
	var app = angular.module('store', ['store-products']);

	app.controller('StoreController', ['$http', function($http) {
		// this.products = gem;
		var store = this;
		store.products = [];

		$http.get('products.json').then(function(response){
			store.products = response.data;
		});
	} ]);

	app.controller('PanelController', function() {
		// this.tab = 1;

		// this.selectTab = function(setTab) {
		// 	this.tab = setTab;
		// }

		// this.isSelected = function(checkTab) {
		// 	return this.tab === checkTab;
		// }
	});

	app.controller('ReviewController', function() {
		this.review = {};

		this.addReview = function(product) {
			product.reviews.push(this.review);
			this.review = {};
		};
	});

	// app.directive('productTitle', function() {
	// 	return {
	// 		restrict: 'E',
	// 		templateUrl: 'templates/product-title.html'
	// 	};
	// });

	// app.directive('productPanels', function() {
	// 	return {
	// 		restrict: 'E',
	// 		templateUrl: 'templates/product-panels.html',
	// 		controller: function() {
	// 			this.tab = 1;

	// 			this.selectTab = function(setTab) {
	// 				this.tab = setTab;
	// 			}

	// 			this.isSelected = function(checkTab) {
	// 				return this.tab === checkTab;
	// 			}
	// 		},
	// 		controllerAs: 'panels'
	// 	};
	// });

	// var gem = [];  // products array now comes from products.json file
})(angular);