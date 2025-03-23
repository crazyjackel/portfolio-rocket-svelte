<script lang="ts">
    import { base } from '$app/paths';
</script>

<header style="border-image: url('{base}/Border.png') 11 repeat;">
	<div>
		<h1 class="title-global"><a href="{base}/">Jackson Levitt</a></h1>
		<nav>
			<ul>
				<li><a href="{base}/">[About]</a></li>
				<li><a href="{base}/">[Blog]</a></li>
				<li><a href="{base}/">[Projects]</a></li>
				<li><a href="{base}/">[Books]</a></li>
				<li><a href="{base}/">[Stats]</a></li>
			</ul>
		</nav>
	</div>
	<div>
		<h1 class="title-event">
			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="title-event-wrap">$Τ</span><a href="{base}/">ꝛ@ΤƎ</a><span class="title-event-wrap">𐤂𐍅</span>
		</h1>
		<nav>
			<ul>
				<li><a href="{base}/">[Home]</a></li>
				<li><a href="{base}/Resume 2024.pdf">[Resume]</a></li>
				<li><a href="https://github.com/crazyjackel">[Github]</a></li>
				<li><a href="https://www.linkedin.com/in/jackson-levitt-0abb66176/">[LinkedIn]</a></li>
				<li><a href="https://theuselessweb.com/">[Random]</a></li>
			</ul>
		</nav>
	</div>
</header>


<style>
header {
    white-space: nowrap;
    cursor: default;
    z-index: 100;
    margin-bottom: 1em;
    background: linear-gradient(var(--background-color-light) 75%, var(--background-color-alt));
    color: var(--text-color);
    font-family: "Source Code Pro", monospace;
    font-weight: 300;
    font-size: 14pt;
    min-width: 60em;
    padding: 8px;
    padding-bottom: 4px;
    padding-left: 20px;
    border-style: solid;
    border-width: 0px;
    border-bottom-width: 11px;
}

header h1 {
    display: inline-block;
    margin: 0;
    padding-right: 1em;
}

h1 {
    font-size: 1em;
    font-weight: normal;
}

header h1 a, header h1 span {
    display: inline-block;
    text-decoration: none;
    color: var(--text-color);
    text-shadow: 0 0 2px var(--accent-color), 0 0 5px var(--text-color);
}

a {
    text-decoration: none;
    color: var(--text-color-alt);
    outline: 0;
}

header nav {
    display: inline-block;
}

header nav ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: inline-block;
}

header nav li {
    display: inline-block;
    padding: 0 .6em;
}

</style>