TenUp_Nav.build_menu({
	'target'        : '#menu-main-nav', // ID of the nav UL
	'toggle'        : '#js-menu-toggle', // ID of the toggle link
	'sub_menu_open' : 'click' // "hover" is the default
}, function() {
	console.log('Amazing callback function!');
});
