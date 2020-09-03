<h3>Installation</h3>

<p>The standard import from the NPM package will bring in all the animations. If you want to choose the animations to bring in you can do so manually by referencing the CSS files directly.</p>

<div class="u-spacing__bottom--medium">
<code>npm install @10up/animate --save</code>
</div>

<h3>Available Animation Options</h3>
<p>This is a full list of options currently available.</p>

<h4>Fade</h4>

<table class="u-spacing__bottom--medium">
	<caption>List of Fade options</caption>
	<thead>
		<tr>
			<th>Class</th>
			<th>Animation Name</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><code class="is-clean">.fade-in</code></td>
			<td><code class="is-clean">fadeIn</code></td>
			<td>Update opacity from 0 to 1</td>
		</tr>
		<tr>
			<td><code class="is-clean">.fade-out</code></td>
			<td><code class="is-clean">fadeOut</code></td>
			<td>Update opacity from 1 to 0</td>
		</tr>
	</tbody>
</table>

<h4>Rotate</h4>

<table class="u-spacing__bottom--medium">
	<caption>List of Rotate options</caption>
	<thead>
		<tr>
			<th>Class</th>
			<th>Animation Name</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><code class="is-clean">.rotate-90</code></td>
			<td><code class="is-clean">rotate90</code></td>
			<td>Rotate to 90 degrees</td>
		</tr>
		<tr>
			<td><code class="is-clean">.rotate-180</code></td>
			<td><code class="is-clean">rotate180</code></td>
			<td>Rotate to 180 degrees</td>
		</tr>
		<tr>
			<td><code class="is-clean">.rotate-270</code></td>
			<td><code class="is-clean">rotate270</code></td>
			<td>Rotate to 270 degrees</td>
		</tr>
		<tr>
			<td><code class="is-clean">.rotate-360</code></td>
			<td><code class="is-clean">rotate360</code></td>
			<td>Rotate to 360 degrees</td>
		</tr>
	</tbody>
</table>

<h4>Scale (Zoom)</h4>

<table class="u-spacing__bottom--medium">
	<caption>List of Scale (Zoom) options</caption>
	<thead>
		<tr>
			<th>Class</th>
			<th>Animation Name</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><code class="is-clean">.scale-down</code></td>
			<td><code class="is-clean">scaleDown</code></td>
			<td>Scale from 1 to 0.75</td>
		</tr>
		<tr>
			<td><code class="is-clean">.scale-down-large</code></td>
			<td><code class="is-clean">scaleDownLarge</code></td>
			<td>Scale from 1 to 0.5</td>
		</tr>
		<tr>
			<td><code class="is-clean">.scale-down-small</code></td>
			<td><code class="is-clean">scaleDownSmall</code></td>
			<td>Scale from 1 to 0.9</td>
		</tr>
		<tr>
			<td><code class="is-clean">.scale-up</code></td>
			<td><code class="is-clean">scaleUp</code></td>
			<td>Scale from 1 to 1.25</td>
		</tr>
		<tr>
			<td><code class="is-clean">.scale-up-large</code></td>
			<td><code class="is-clean">scaleUpLarge</code></td>
			<td>Scale from 1 to 1.5</td>
		</tr>
		<tr>
			<td><code class="is-clean">.scale-up-small</code></td>
			<td><code class="is-clean">scaleUpSmall</code></td>
			<td>Scale from 1 to 1.1</td>
		</tr>
	</tbody>
</table>

<h4>Shake</h4>

<table class="u-spacing__bottom--medium">
	<caption>List of Shake options</caption>
	<thead>
		<tr>
			<th>Class</th>
			<th>Animation Name</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><code class="is-clean">.shake-horizontal</code></td>
			<td><code class="is-clean">shakeHorizontal</code></td>
			<td>Right-to-left movement, 10px</td>
		</tr>
		<tr>
			<td><code class="is-clean">.shake-horizontal-large</code></td>
			<td><code class="is-clean">shakeHorizontalLarge</code></td>
			<td>Right-to-left movement, 15px</td>
		</tr>
		<tr>
			<td><code class="is-clean">.shake-horizontal-small</code></td>
			<td><code class="is-clean">shakeHorizontalSmall</code></td>
			<td>Right-to-left movement, 5px</td>
		</tr>
		<tr>
			<td><code class="is-clean">.shake-vertical</code></td>
			<td><code class="is-clean">shakeVertical</code></td>
			<td>Up-to-down movement, 10px</td>
		</tr>
		<tr>
			<td><code class="is-clean">.shake-vertical-large</code></td>
			<td><code class="is-clean">shakeVerticalLarge</code></td>
			<td>Up-to-down movement, 15px</td>
		</tr>
		<tr>
			<td><code class="is-clean">.shake-vertical-small</code></td>
			<td><code class="is-clean">shakeVerticalSmall</code></td>
			<td>Up-to-down movement, 5px</td>
		</tr>
	</tbody>
</table>

<h4>Slide</h4>

<table class="u-spacing__bottom--medium">
	<caption>List of Slide options</caption>
	<thead>
		<tr>
			<th>Class</th>
			<th>Animation Name</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><code class="is-clean">.slide-in-down</code></td>
			<td><code class="is-clean">slideInDown</code></td>
			<td>Move object from 100% down to 0%</td>
		</tr>
		<tr>
			<td><code class="is-clean">.slide-in-left</code></td>
			<td><code class="is-clean">slideInLeft</code></td>
			<td>Move object from 100% left to 0%</td>
		</tr>
		<tr>
			<td><code class="is-clean">.slide-in-right</code></td>
			<td><code class="is-clean">slideInRight</code></td>
			<td>Move object from 100% right 0%</td>
		</tr>
		<tr>
			<td><code class="is-clean">.slide-in-up</code></td>
			<td><code class="is-clean">slideInUp</code></td>
			<td>Move object from 100% up 0%</td>
		</tr>
		<tr>
			<td><code class="is-clean">.slide-out-down</code></td>
			<td><code class="is-clean">slideOutDown</code></td>
			<td>Move object from 0% to down 100%</td>
		</tr>
		<tr>
			<td><code class="is-clean">.slide-out-left</code></td>
			<td><code class="is-clean">slideOutLeft</code></td>
			<td>Move object from 0% to left 100%</td>
		</tr>
		<tr>
			<td><code class="is-clean">.slide-out-right</code></td>
			<td><code class="is-clean">slideOutRight</code></td>
			<td>Move object from 0% to right 100%</td>
		</tr>
		<tr>
			<td><code class="is-clean">.slide-out-up</code></td>
			<td><code class="is-clean">slideOutUp</code></td>
			<td>Move object from 0% to up 100%</td>
		</tr>
	</tbody>
</table>

<h4>Delay</h4>

<table class="u-spacing__bottom--medium">
	<caption>List of Delay options</caption>
	<thead>
		<tr>
			<th>Name</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><code class="is-clean">.delay-150</code></td>
			<td>Set animation delay to 150ms</td>
		</tr>
		<tr>
			<td><code class="is-clean">.delay-200</code></td>
			<td>Set animation delay to 200ms</td>
		</tr>
		<tr>
			<td><code class="is-clean">.delay-250</code></td>
			<td>Set animation delay to 250ms</td>
		</tr>
		<tr>
			<td><code class="is-clean">.delay-300</code></td>
			<td>Set animation delay to 300ms</td>
		</tr>
		<tr>
			<td><code class="is-clean">.delay-350</code></td>
			<td>Set animation delay to 350ms</td>
		</tr>
		<tr>
			<td><code class="is-clean">.delay-400</code></td>
			<td>Set animation delay to 400ms</td>
		</tr>
		<tr>
			<td><code class="is-clean">.delay-450</code></td>
			<td>Set animation delay to 450ms</td>
		</tr>
		<tr>
			<td><code class="is-clean">.delay-500</code></td>
			<td>Set animation delay to 500ms</td>
		</tr>
		<tr>
			<td><code class="is-clean">.delay-550</code></td>
			<td>Set animation delay to 550ms</td>
		</tr>
		<tr>
			<td><code class="is-clean">.delay-600</code></td>
			<td>Set animation delay to 600ms</td>
		</tr>
		<tr>
			<td><code class="is-clean">.delay-650</code></td>
			<td>Set animation delay to 650ms</td>
		</tr>
		<tr>
			<td><code class="is-clean">.delay-700</code></td>
			<td>Set animation delay to 700ms</td>
		</tr>
		<tr>
			<td><code class="is-clean">.delay-750</code></td>
			<td>Set animation delay to 750ms</td>
		</tr>
		<tr>
			<td><code class="is-clean">.delay-800</code></td>
			<td>Set animation delay to 800ms</td>
		</tr>
		<tr>
			<td><code class="is-clean">.delay-850</code></td>
			<td>Set animation delay to 850ms</td>
		</tr>
		<tr>
			<td><code class="is-clean">.delay-900</code></td>
			<td>Set animation delay to 900ms</td>
		</tr>
		<tr>
			<td><code class="is-clean">.delay-950</code></td>
			<td>Set animation delay to 950ms</td>
		</tr>
		<tr>
			<td><code class="is-clean">.delay-1000</code></td>
			<td>Set animation delay to 1000ms</td>
		</tr>
	</tbody>
</table>

<h4>Duration</h4>

<table class="u-spacing__bottom--medium">
	<caption>List of Duration options</caption>
	<thead>
		<tr>
			<th>Name</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
	<tr>
	    <td><code class="is-clean">.duration-150</code></td>
	    <td>Set animation duration to 150ms</td>
	</tr>
	<tr>
	    <td><code class="is-clean">.duration-200</code></td>
	    <td>Set animation duration to 200ms</td>
	</tr>
	<tr>
	    <td><code class="is-clean">.duration-250</code></td>
	    <td>Set animation duration to 250ms</td>
	</tr>
	<tr>
	    <td><code class="is-clean">.duration-300</code></td>
	    <td>Set animation duration to 300ms</td>
	</tr>
	<tr>
	    <td><code class="is-clean">.duration-350</code></td>
	    <td>Set animation duration to 350ms</td>
	</tr>
	<tr>
	    <td><code class="is-clean">.duration-400</code></td>
	    <td>Set animation duration to 400ms</td>
	</tr>
	<tr>
	    <td><code class="is-clean">.duration-450</code></td>
	    <td>Set animation duration to 450ms</td>
	</tr>
	<tr>
	    <td><code class="is-clean">.duration-500</code></td>
	    <td>Set animation duration to 500ms</td>
	</tr>
	<tr>
	    <td><code class="is-clean">.duration-550</code></td>
	    <td>Set animation duration to 550ms</td>
	</tr>
	<tr>
	    <td><code class="is-clean">.duration-600</code></td>
	    <td>Set animation duration to 600ms</td>
	</tr>
	<tr>
	    <td><code class="is-clean">.duration-650</code></td>
	    <td>Set animation duration to 650ms</td>
	</tr>
	<tr>
	    <td><code class="is-clean">.duration-700</code></td>
	    <td>Set animation duration to 700ms</td>
	</tr>
	<tr>
	    <td><code class="is-clean">.duration-750</code></td>
	    <td>Set animation duration to 750ms</td>
	</tr>
	<tr>
	    <td><code class="is-clean">.duration-800</code></td>
	    <td>Set animation duration to 800ms</td>
	</tr>
	<tr>
	    <td><code class="is-clean">.duration-850</code></td>
	    <td>Set animation duration to 850ms</td>
	</tr>
	<tr>
	    <td><code class="is-clean">.duration-900</code></td>
	    <td>Set animation duration to 900ms</td>
	</tr>
	<tr>
	    <td><code class="is-clean">.duration-950</code></td>
	    <td>Set animation duration to 950ms</td>
	</tr>
	<tr>
	    <td><code class="is-clean">.duration-1000</code></td>
	    <td>Set animation duration to 1000ms</td>
	</tr>
	</tbody>
</table>

<h4>Timing</h4>

<table class="u-spacing__bottom--medium">
	<caption>List of Timing options</caption>
	<thead>
		<tr>
			<th>Name</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td><code class="is-clean">.timing-ease-in-out</code></td>
			<td>Slow starting and a slow ending speed</td>
		</tr>
		<tr>
			<td><code class="is-clean">.timing-ease-in</code></td>
			<td>Slow starting speed</td>
		</tr>
		<tr>
			<td><code class="is-clean">.timing-ease-out</code></td>
			<td>Slow ending speed</td>
		</tr>
		<tr>
			<td><code class="is-clean">.timing-ease</code></td>
			<td>Slow start, then fast, before it ends slowly</td>
		</tr>
		<tr>
			<td><code class="is-clean">.timing-linear</code></td>
			<td>Consistent speed from start to end</td>
		</tr>
	</tbody>
</table>
