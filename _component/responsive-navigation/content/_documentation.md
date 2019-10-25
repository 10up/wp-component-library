<h3>Installation</h3>

<p>This component accepts two arguments, the selector for the navigation container and an object containing configuration settings and optional callbacks.</p>

<div class="u-spacing__bottom--medium">
<code>npm install @10up/component-navigation --save</code>
</div>

<h3>Options</h3>

 <table class="table--code u-spacing__bottom--large">
 	<tr>
 		<th class="th">action</th>
 		<td class="td">The action to use to open menu items <em>(default) hover</em></td>
 	</tr>
 	<tr>
 		<th>breakpoint</th>
 		<td>Viewport breakpoint to switch to small screen menu <em>(default) (min-width: 48em)</em></td>
 	</tr>
 </table>

<h3>Callbacks</h3>

 <table class="table--code u-spacing__bottom--large">
 	<tr>
 		<th class="th">onCreate</th>
 		<td class="td">Called after the component is initialized on page load</td>
 	</tr>
 	<tr>
 		<th>onOpen</th>
 		<td>Called when a menu item is opened</td>
 	</tr>
 	<tr>
 		<th>onClose</th>
 		<td>Called when a menu item is closed</td>
 	</tr>
	<tr>
 		<th>onSubmenuOpen</th>
 		<td>Called when a submenu item is opened</td>
 	</tr>
	<tr>
 		<th>onSubmenuClose</th>
 		<td>Called when a submenu item is closed</td>
 	</tr>
 </table>
