---
layout: default
---

<div class="toc">
	<header>
		<h2>Table of Contents</h2>
	</header>

	<div class="col">
		<h3><a href="{{ site.baseurl }}#top">Introduction</a></h3>
		<ul>
			<li><a href="{{ site.baseurl }}#audience">Audience</a></li>
			<li><a href="{{ site.baseurl }}#goal">Goal</a></li>
			<li><a href="{{ site.baseurl }}#philosophy">Philosophy</a></li>
			<li><a href="{{ site.baseurl }}#contributing">Contributing</a></li>
		</ul>
	</div>

	{% for category in site.data.categories %}
		<div class="col">
			<div class="component-tile">
				<h3 class="tile-header">
					<img src="{{ site.baseurl }}/assets/img/icon-{{ category.slug }}.svg" alt="Icon for {{ category.pretty }}"  class="tile-icon"/>
					<span class="tile-heading">{{ category.pretty }}</span>
				</h3>

				<ul class="tile-list">
				{% for component in site.component %}
					{% if component.category == category.slug %}
						<li><a href="{{ site.baseurl }}{{ component.url }}">{{ component.title }}</a></li>
					{% endif %}
				{% endfor %}
				</ul>
			</div><!--/.component-tile-->
		</div><!--/.-col-->
	{% endfor %}
</div>

<div class="content">
	{% capture introduction %}{% include markdown/Introduction.md %}{% endcapture %}
	{{ introduction | markdownify }}
</div>