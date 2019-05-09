#### Standalone

Include the `tabs.js` file from the `dist/` directory and access the component from the gobal `TenUp` object.

<div class="code-block">
<button class="copy-clipboard" data-clipboard-action="copy" data-clipboard-target=".copy-js-snippet">Copy to clipboard</button>
<div class="copy-js-snippet">
{% highlight javascript %}
let myTabs = new TenUp.tabs( '.tabs', {
	orientation: 'horizontal', // default is 'horizontal', can be 'vertical'
	onCreate: function() {
		console.log( 'onCreate callback' );
	},
	onTabChange: function() {
		console.log( 'onTabChange callback' );
	}
} );
{% endhighlight %}
</div>
</div>
