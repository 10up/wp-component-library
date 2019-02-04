<div class="code-block">
<button class="copy-clipboard" data-clipboard-action="copy" data-clipboard-target=".copy-scss-snippet">Copy to clipboard</button>
<div class="copy-scss-snippet">
{% highlight javascript %}
let myAccordion = new TenUp.accordion( '.accordion', {
	onCreate: function() {
		console.log( 'onCreate callback' );
	},
	onOpen: function() {
		console.log( 'onOpen callback' );
	},
	onClose: function() {
		console.log( 'onClose callback' );
	},
	onToggle: function() {
		console.log( 'onToggle callback' );
	}
} );
{% endhighlight %}
</div>
</div>
