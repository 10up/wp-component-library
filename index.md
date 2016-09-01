---
layout: default
---

<div class="content">
	<div class="grid-layout">

		{% for category in site.data.categories %}

			<div class="grid-col w-sm-100 w-mid-50">
				<div class="component-tile">
					<h2 class="tile-header">
						<img src="{{ site.baseurl }}/assets/img/icon-{{ category.slug }}.svg" alt="Icon for {{ category.pretty }}"  class="tile-icon"/>
						<span class="tile-heading">{{ category.pretty }}</span>
					</h2>

					<ul class="tile-list">
					{% for component in site.component %}
						{% if component.category == category.slug %}
							<li><a href="{{ site.baseurl }}{{ component.url }}">{{ component.title }}</a></li>
						{% endif %}
					{% endfor %}
					</ul>
				</div><!--/.component-tile-->
			</div><!--/.grid-col-->

		{% endfor %}

	</div><!--/.grid-layout-->
</div><!--/.content-->
