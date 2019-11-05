<div class="tabs">
	<div class="code-tab-control tab-control">
		<ul class="code-tab-list tab-list" role="tablist">
			<li class="code-tab-item tab-item">
				<a href="#text" id="js-text-link" role="tab" aria-controls="text">HTML</a>
			</li>
			<li class="code-tab-item tab-item">
				<a href="#css" id="js-css-link" role="tab" aria-controls="css">CSS</a>
			</li>
			<li class="code-tab-item tab-item">
				<a href="#js" id="js-js-link" role="tab" aria-controls="js">JavaScript</a>
			</li>
			<li class="code-tab-item tab-item">
				<a href="#js" id="js-standalone-link" role="tab" aria-controls="standalone">
					Standalone JS <span aria-describedby="standalone-desc">*</span>
				</a>
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

		<div id="js" class="code-tab tab-content" role="tabpanel">
			<div class="tab__body">
				<div class="code-block">
					<div class="copy-js-snippet">
						{% highlight javascript %}
{% include_relative component-usage.js %}
						{% endhighlight %}
					</div><!--/.copy-js-snippet-->
				</div><!--/.code-block-->
			</div><!--/.tab__body-->
			<ul class="button-group">
				<li><button data-clipboard-action="copy" data-clipboard-target=".copy-js-snippet" class="copy-clipboard button button--tertiary">Copy JavaScript to clipboard</button></li>
			</ul>

		</div>

		<div id="standalone" class="code-tab tab-content" role="tabpanel">
			<div class="tab__body">
				<div class="code-block">
					<div class="copy-standalone-snippet">
						{% highlight javascript %}
{% include_relative component-standalone.js %}
						{% endhighlight %}
					</div><!--/.copy-standalone-snippet-->
				</div><!--/.code-block-->
			</div><!--/.tab__body-->
			<ul class="button-group">
				<li><button data-clipboard-action="copy" data-clipboard-target=".copy-standalone-snippet" class="copy-clipboard button button--tertiary">Copy Standalone JavaScript to clipboard</button></li>
			</ul>
		</div><!--/.code-tab-->
	</div>

	<p id="standalone-desc" class="c-callout--secondary">
		* <strong>Standalone <abbr title="JavaScript">JS</abbr></strong> is used on projects that are not set up to handle
		ES6. To use this version you will need to download the compiled
		JavaScript from the <a href="https://github.com/10up/component-tooltip/blob/master/dist/tooltip.js">component's dist directory</a> and pull it into your
		project. The same process should be
		followed with the CSS if it cannot process through the NPM package.
	</p>
</div>
