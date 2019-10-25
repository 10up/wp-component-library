<div class="tabs">
	<div class="code-tab-control tab-control">
		<ul class="code-tab-list tab-list" role="tablist">
			<li class="code-tab-item tab-item">
				<a href="#horizontal" id="js-horizontal" role="tab" aria-controls="horizontal">Horizontal</a>
			</li>
			<li class="code-tab-item tab-item">
				<a href="#vertical" id="js-vertical" role="tab" aria-controls="vertical">Vertical</a>
			</li>
		</ul>
	</div><!-- /.tab-control -->

	<div class="tab-group">

		<div id="horizontal" class="code-tab tab-content" role="tabpanel">
			<div class="tab__body">
<iframe src="{{ site.baseurl }}/component/{{ page.path_slug }}/example.html" title="Tabs Example" border="0" id="example-iframe" class="c-iframe c-iframe--clean c-iframe--{{page.iframe_height}}"></iframe>
			</div><!--/.tab__body-->

			<ul class="button-group button-group--flush">
				<li><button data-width="small" type="button" class="rwd-button rwd-button-small button button--tertiary" aria-controls="example-iframe" aria-label="Resize iframe display: small.">Small Screen</button></li>
				<li><button data-width="large" type="button" class="rwd-button rwd-button-large button button--tertiary" aria-controls="example-iframe" aria-label="Resize iframe display: large.">Large Screen</button></li>
				<li><button data-width="reset" type="button" class="rwd-button rwd-button-reset button button--tertiary-dark button--tertiary" aria-controls="example-iframe" aria-label="Reset iframe display.">Reset</button></li>
			</ul>

		</div><!--/.code-tab-->

		<div id="vertical" class="code-tab tab-content" role="tabpanel">
			<div class="tab__body">
<iframe src="{{ site.baseurl }}/component/{{ page.path_slug }}/example-horizontal.html" title="Tabs Example" border="0" id="example-iframe-horizontal" class="c-iframe c-iframe--clean c-iframe--{{page.iframe_height}}"></iframe>
			</div><!--/.tab__body-->

			<ul class="button-group button-group--flush">
				<li><button data-width="small" type="button" class="rwd-button rwd-button-small button button--tertiary" aria-controls="example-iframe-horizontal" aria-label="Resize iframe display: small.">Small Screen</button></li>
				<li><button data-width="large" type="button" class="rwd-button rwd-button-large button button--tertiary" aria-controls="example-iframe-horizontal" aria-label="Resize iframe display: large.">Large Screen</button></li>
				<li><button data-width="reset" type="button" class="rwd-button rwd-button-reset button button--tertiary-dark button--tertiary" aria-controls="example-iframe-horizontal" aria-label="Reset iframe display.">Reset</button></li>
			</ul>

		</div>

	</div>
</div>
