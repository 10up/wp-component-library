---
layout: default
---

<div class="content grid-layout">
	{% for component in site.component %}

		<div class="component-tile grid-col w-sm-100 w-mid-50 w-large-33">
			<a href="{{ site.baseurl }}{{ component.url }}"><img src="{{ site.baseurl }}/component/{{ component.relative_path }}/component.png"></a>
	    	<h2><a href="{{ site.baseurl }}{{ component.url }}">{{ component.title }}</a></h2>
	    </div>

	{% endfor %}
</div>
