angular.module('app')
	.controller('appCtrl', function($scope)  { 

		/* Var del controlador */
			const navbar = $('.navbar');
			navbar.addClass('navbar-change');
			const navbarHeight = $('.navbar').height();
		/* End Var del controlador*/


		window.addEventListener('scroll', function(e) {	
			const navbarCurrentPosition = document.body.scrollTop;
			if (navbarCurrentPosition >= navbarHeight) {
				navbar.removeClass('navbar-change');
			} else {
				navbar.addClass('navbar-change');
			}			
		});
	});