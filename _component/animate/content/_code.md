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
				<a href="#chaining-css" id="js-css-link" role="tab" aria-controls="chaining-css">Chaining Animations</a>
			</li>
		</ul>
	</div><!-- //.tab-control -->

	<div class="tab-group">

		<div id="text" class="code-tab tab-content" role="tabpanel">

			<div class="tab__body">
				<div class="copy-html">
					{% highlight html %}
<div class="fade-in duration-500 timing-linear delay-500">
  Animate me!
</div>
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
@import url("@10up/animate");
						{% endhighlight %}
					</div>
				</div><!--/.code-block-->
			</div><!--/.tab__body-->
			<ul class="button-group">
				<li><button data-clipboard-action="copy" data-clipboard-target=".copy-css-snippet" class="copy-clipboard button button--tertiary">Copy CSS to clipboard</button></li>
			</ul>
		</div><!--/.code-tab-->

		<div id="chaining-css" class="code-tab tab-content" role="tabpanel">
			<div class="tab__body">
				<div class="code-block">
					<div class="copy-css-chain-snippet">
						{% highlight css %}
/*
  Using the animation names from the library you can create
  custom combinations like a fade in, slide up
*/
.custom-chained-animation {
  animation-name: fadeIn, slideInUp;
}
						{% endhighlight %}
					</div>
				</div><!--/.code-block-->
			</div><!--/.tab__body-->
			<ul class="button-group">
				<li><button data-clipboard-action="copy" data-clipboard-target=".copy-css-chain-snippet" class="copy-clipboard button button--tertiary">Copy CSS to clipboard</button></li>
			</ul>
		</div><!--/.code-tab-->

	</div>
</div>
