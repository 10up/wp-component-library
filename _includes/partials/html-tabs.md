<div class="tabs">
	<div class="code-tab-control tab-control">
		<ul class="code-tab-list tab-list" role="tablist">
			<li class="code-tab-item tab-item"><a href="#templated" id="js-templated-link" role="tab" aria-controls="templated">Templated</a></li>
			<li class="code-tab-item tab-item"><a href="#text" id="js-text-link" role="tab" aria-controls="text">Text</a></li>
		</ul>
	</div><!-- //.tab-control -->

	<div class="tab-group">
		<div id="templated" class="code-tab tab-content" role="tabpanel">
			<button class="copy-clipboard" data-clipboard-action="copy" data-clipboard-target=".copy-templated">Copy to clipboard</button>
			<div class="copy-templated">
			{% highlight php %}
			{% include_relative component-wp.html %}
			{% endhighlight %}
			</div>
		</div>

		<div id="text" class="code-tab tab-content" role="tabpanel">
			<button class="copy-clipboard" data-clipboard-action="copy" data-clipboard-target=".copy-html">Copy to clipboard</button>
			<div class="copy-html">
			{% highlight html %}
			{% include_relative component.html %}
			{% endhighlight %}
			</div>
		</div>
	</div>
</div>
