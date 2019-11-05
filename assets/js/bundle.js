---
---

"use strict";

{% include_relative vendor/clipboard.min.js %}
{% include_relative vendor/tabs.min.js %}

(function() {

	var App = {};

	{% include_relative components/navigation.js %}
	{% include_relative components/rwd-buttons.js %}
	{% include_relative components/clipboard.js %}
	{% include_relative components/tabs.js %}

})();
