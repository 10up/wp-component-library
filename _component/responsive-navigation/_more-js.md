<div class="code-block">
<button class="copy-clipboard" data-clipboard-action="copy" data-clipboard-target=".copy-scss-snippet">Copy to clipboard</button>
<div class="copy-scss-snippet">
{% highlight javascript %}
let myNavigation = new TenUp.navigation( '.navigation', {
	action: 'click',
	onCreate: function() {
		console.log( 'onCreate callback' );
	},
	onOpen: function() {
		console.log( 'onOpen callback' );
	},
	onClose: function() {
		console.log( 'onClose callback' );
	},
	onSubmenuOpen: function() {
		console.log( 'onSubmenuOpen callback' );
	},
	onSubmenuClose: function() {
		console.log( 'onSubmenuClose callback' );
	}
} );
{% endhighlight %}
</div>
</div>
