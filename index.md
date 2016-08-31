---
layout: default
---

<div class="content">
{% for category in site.data.categories %}

	<h2>{{ category.pretty }}</h2>

	<div class="grid-layout">
		{% for component in site.component %}
			{% if component.category == category.slug %}
				<div class="component-tile grid-col w-sm-100 w-mid-50 w-large-33">
					<a href="{{ site.baseurl }}{{ component.url }}"><img src="{{ site.baseurl }}/component/{{ component.path_slug }}/component.png"></a>
	    			<h3><a href="{{ site.baseurl }}{{ component.url }}">{{ component.title }}</a></h3>
	    		</div>
	    	{% endif %}
	    {% endfor %}
	</div>
{% endfor %}
</div>
