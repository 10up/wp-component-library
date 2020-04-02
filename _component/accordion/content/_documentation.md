<h3>Installation</h3>

<p>This component accepts two arguments, the selector for the accordion container and an object containing optional callbacks.</p>

<div class="u-spacing__bottom--medium">
<code>npm install @10up/component-accordion --save</code>
</div>

<table class="table--code u-spacing__bottom--large">
	<caption>API</caption>
	<tr>
		<th class="th">onCreate</th>
		<td class="td">Called after the accordion is initialized on page load</td>
	</tr>
	<tr>
		<th>onOpen</th>
		<td>Called when an accordion item is opened</td>
	</tr>
	<tr>
		<th>onClose</th>
		<td>Called when an accordion item is closed</td>
	</tr>
	<tr>
		<th>onToggle</th>
		<td>Called when an accordion item is toggled</td>
	</tr>
</table>

<table class="table--code">
	<caption>Classes</caption>
	<tr>
		<th>.accordion</th>
		<td>Wrapping class for the component.</td>
	</tr>
	<tr>
		<th>.accordion-header</th>
		<td>Accordion item trigger element.</td>
	</tr>
	<tr>
		<th>.accordion-content</th>
		<td>Wrapping class for the accordion content.</td>
	</tr>
	<tr>
		<th>.accordion-label</th>
		<td>Label for an accordion section.</td>
	</tr>
</table>
