---
layout: default
---
<main id="main-content" class="content">
	<div class="component">
		{% if page.title %}
			<h2>{{ page.title }}</h2>
		{% endif %}
		
		{{ content }}
	</div>
</main>
