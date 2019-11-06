<div class="tabs">
	<div class="code-tab-control tab-control">
		<ul class="code-tab-list tab-list" role="tablist">
			<li class="code-tab-item tab-item">
				<a href="#text" id="js-text-link" role="tab" aria-controls="text">HTML</a>
			</li>
			<li class="code-tab-item tab-item">
				<a href="#text" id="js-wp-link" role="tab" aria-controls="wp">WordPress</a>
			</li>
			<li class="code-tab-item tab-item">
				<a href="#css" id="js-css-link" role="tab" aria-controls="css">CSS</a>
			</li>
		</ul>
	</div><!-- //.tab-control -->

	<div class="tab-group">

		<div id="text" class="code-tab tab-content" role="tabpanel">

			<div class="tab__body">
				<div class="copy-html">
					{% highlight html %}
{% include_relative component.html %}
					{% endhighlight %}
				</div>
			</div>

			<ul class="button-group">
				<li><button data-clipboard-action="copy" data-clipboard-target=".copy-html" class="copy-clipboard button button--tertiary">Copy HTML to clipboard</button></li>
			</ul>
		</div>

		<div id="wp" class="code-tab tab-content" role="tabpanel">

			<div class="tab__body">
				<div class="copy-html">
					{% highlight html %}
{% include_relative component-wp.html %}
					{% endhighlight %}
				</div>
			</div>

			<ul class="button-group">
				<li><button data-clipboard-action="copy" data-clipboard-target=".copy-html" class="copy-clipboard button button--tertiary">Copy HTML to clipboard</button></li>
			</ul>
		</div>

		<div id="css" class="code-tab tab-content" role="tabpanel">
			<div class="tab__body">
				<div class="code-block">
					<div class="copy-css-snippet">
						{% highlight css %}
{% include_relative component.css %}
						{% endhighlight %}
					</div>
				</div><!--/.code-block-->
			</div><!--/.tab__body-->
			<ul class="button-group">
				<li><button data-clipboard-action="copy" data-clipboard-target=".copy-css-snippet" class="copy-clipboard button button--tertiary">Copy CSS to clipboard</button></li>
			</ul>
		</div><!--/.code-tab-->

	</div>
</div>
