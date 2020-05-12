<h3>Installation</h3>

<p>This component accepts two arguments, the selector for the countdown timer container, and an optional settings object containing callback functions and other options.</p>

<div class="u-spacing__bottom--medium">
<code>npm install @10up/countdown-timer --save</code>
</div>

<h3 id="api">API</h3>

<p>This component accepts two arguments, the selector for the component container and an object containing optional settings and callbacks.</p>

<h4 id="supported-intervals">Supported Intervals</h4>
<p>The timer can display values for the following time intervals:</p>

<ul class="u-spacing__bottom--large">
	<li><code>years</code></li>
	<li><code>weeks</code></li>
	<li><code>days</code></li>
	<li><code>hours</code></li>
	<li><code>minutes</code></li>
	<li><code>seconds</code></li>
</ul>

<h4 id="why-no-months-">Why no months?</h4>
<p class="u-spacing__bottom--large">Since various months can contain different numbers of days, a month is not an exact unit of time, so it’s not as useful for counting toward or away from a specific point in time. All supported intervals contain an exact number of seconds. The one exception is <code>years</code>, which can contain either 365 or 366 days. The component will factor this into its calculations by adding an extra day for each leap year as necessary.</p>

<h4 id="settings">General Settings</h4>

<table class="table--code u-spacing__bottom--large">
<tr>
	<th scope="row">allowNegative<br>(Boolean: false)</th>
	<td scope="col">If true, the timer will continue to count up once the given time has passed. This lets you display the time elapsed since a given time</td>
</tr>
<tr>
	<th scope="row">compact<br>(Boolean: false)</th>
	<td scope="col">If true, the timer will display only the highest non-zero interval value. This lets you display a more approximate time, e.g. 3 days. The timer will continue to tick once per second and the interval shown will change as necessary.</td>
</tr>
<tr>
	<th scope="row">padValues<br>(Boolean: false)</th>
	<td scope="col">If true, single-digit numbers displayed by the timer will be padded with a leading zero.</td>
</tr>
<tr>
	<th scope="row">separator<br>(String: ,)</th>
	<td scope="col">Define a string to be rendered between intervals.</td>
</tr>
<tr>
	<th scope="row">showZeroes<br>(Boolean: false)</th>
	<td scope="col">If true, all intervals will be shown, even if zero and there are no higher non-zero intervals.</td>
</tr>
</table>

<h4 id="interval-settings">Interval Settings</h4>

<p>You may provide settings for each supported interval. You can give each interval property an object with the following options:</p>

<table class="table--code u-spacing__bottom--large">
<tr>
	<th scope="row">allowed<br>(Boolean: true)</th>
	<td scope="col">If false, this interval will not be displayed in the timer under any circumstances. Useful if you only need to show approximate values (e.g. “3 days, 12 hours since the last error”) or if you know the time you’re counting to/from falls within a certain period and you won’t need to show larger intervals like years or weeks. Note that this won’t affect the calculation of time remaining/elapsed, so if you disallow relevant intervals, the time displayed may appear inaccurate to users. Unless compact is enabled, all non-zero intervals are shown.</td>
</tr>
<tr>
	<th scope="row">singular<br>(String: minute/hour etc.)</th>
	<td scope="col">Allows you to override the default singular label for the interval. Useful if you need to show the timer in a different language, or if you don’t want any labels to appear alongside the numbers. Default value: English singular form of the interval.</td>
</tr>
<tr>
	<th scope="row">plural<br>(String: : minutes/hours etc.)</th>
	<td scope="col">Allows you to override the default plural label for the interval. Useful if you need to show the timer in a different language, or if you don’t want any labels to appear alongside the numbers. Default value: English plural form of the interval.</td>
</tr>
</table>

<h4 id="callbacks">Callbacks</h4>

<table class="table--code u-spacing__bottom--large">
<tr>
	<th scope="row">onCreate</th>
	<td>Called once per component instance after the instance is initialized on page load. Called with a single argument containing the following properties: <code>element</code> (the top-level HTML element of the timer which invoked the callback) and <code>time</code> (the time this timer is counting to/from, in UNIX format).</td>
</tr>
<tr>
	<th scope="row">onEnd</th>
	<td>Called once per component instance when the timer reaches zero (if counting toward a future time). Called with a single argument containing the following properties: <code>element</code> (the top-level HTML element of the timer which invoked the callback) and <code>time</code> (the time this timer is counting to/from, in UNIX format). Note that this callback will never be called if the given time is in the past.</td>
</tr>
<tr>
	<th scope="row">onTick</th>
	<td>Called each time a component instance updates its time (approximately once per second). More information below on this callback function.</td>
</tr>
</table>

<h4 id="ontick-callbacks">OnTick Callback</h4>
<p>The onTick callbackCalled with a single argument, an object that contains the following properties related to the timer instance that called it:</p>

<pre>
	<code class="lang-js">{
	element,    // {object}  The top-level HTML element of the timer which invoked the callback.
	time,       // {number}  The time this timer is counting to/from, in UNIX format.
	diff,       // {number}  The number of milliseconds between `time` and the moment `onTick` was called.
	isNegative, // {boolean} If `true`, `time` is in the past and `diff` is a negative number.
	years,      // {number}  Number of years in `diff`.
	weeks,      // {number}  Number of weeks in `diff`.
	days,       // {number}  Number of days in `diff`.
	hours,      // {number}  Number of hours in `diff`.
	minutes,    // {number}  Number of minutes in `diff`.
	seconds     // {number}  Number of seconds in `diff`.
}</code>
</pre>

<h3 id="dealing-with-time-zones">Dealing with Time Zones</h3>

<p>The time displayed by the component will depend on the local time zone of the browser rendering it. You can control the behavior of the component by providing a date string that considers time zone:</p>

<p>If you provide a <code>datetime</code> without any time zone specification, the component calculates the remaining time based on the user’s local time zone. This is useful if you want to count down to an event relative to local time zone.</p>

<ul class="example-inline">
	<li><strong>For example</strong>, to count down to midnight on New Year’s Day in the year 2046 in the user’s local time zone: <code>2046-01-01T00:00:00</code></li>
</ul>

<p>If you provide a <code>datetime</code> in a specific time zone, the component which will factor in the difference between the specified time zone and the user’s local time zone. This is useful if you want to count down to an event that occurs at an exact time in a specific time zone.</p>

<ul class="example-inline">
	<li><strong>For example</strong>, to count down to midnight on New Year’s Day in the year 2046 in Eastern Standard Time (EST): <code>2046-01-01T00:00:00-04:00</code></li>
</ul>

<p>If you provide a <code>datetime</code> in UTC (with a <code>Z</code> suffix to denote UTC), the component will factor in the difference between UTC and the user’s local time zone. This is useful if you want to count down to an exact time in UTC.</p>

<ul class="example-inline">
	<li><strong>For example</strong>, to count down to midnight on New Year’s Day in the year 2046 in UTC: <code>2046-01-01T00:00:00Z</code></li>
</ul>

<p>If the component does not contain a <code>datetime</code> attribute, the <code>datetime</code> attribute is not a valid date string, or the date string is a date in the past, the component will display zeroes for all intervals.</p>
