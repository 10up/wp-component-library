---
layout: default
---

<div class="content">
	{% for component in site.component %}

		<div class="component">
			<a href="{{ site.baseurl }}{{ component.url }}"><img src="{{ site.baseurl }}/component/{{ component.relative_path }}/component.png"></a>
	    	<h2><a href="{{ site.baseurl }}{{ component.url }}">{{ component.title }}</a></h2>
	    </div>

	{% endfor %}
</div>
