---
layout: default
---

<div class="content">
{% for category_slug in site.categories %}

	<h2>{{ category_slug[1]["pretty"] }}</h2>

	<div class="grid-layout">
		{% for component in site.component %}
			{% if component.category == category_slug[0] %}
				<div class="component-tile grid-col w-sm-100 w-mid-50 w-large-33">
					<a href="{{ site.baseurl }}{{ component.url }}"><img src="{{ site.baseurl }}/component/{{ component.path_slug }}/component.png"></a>
	    			<h3><a href="{{ site.baseurl }}{{ component.url }}">{{ component.title }}</a></h3>
	    		</div>
	    	{% endif %}
	    {% endfor %}
	</div>
{% endfor %}
</div>
