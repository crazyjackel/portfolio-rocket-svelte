<script>

	export let heroImage = 'MyFace3.png';
	export let heroTitle = 'Jackson Levitt';
	export let heroDescription =
		"Engineer & Ludologist"
</script>

<div class="container">
	<div class="hero-section">
		<div class="hero-content">
			<h1>{heroTitle}</h1>
			<p>{heroDescription}</p>
		</div>
		<div class="hero-image" style="background-image: url('{heroImage}');">
		</div>
	</div>
</div>

<style lang="scss">
	.container {
		display: flex;
		width: 100%;
		padding-bottom: 2em;
	}

	.hero-section {
		flex: 1;
		display: flex;
		padding: 40px;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-around;
		background-color: #eaeaea00;

		@media (max-width: 768px) {
			flex-direction: column-reverse;
			text-align: center;
			padding: 20px;
		}
	}
	

	.hero-image {
		width: 300px;
		height: 300px;
		border-radius: 50%;
		background-color: var(--accent-color-dark);
		background-size: cover;
		background-position: center;

		@media (max-width: 768px) {
			width: 220px;
			height: 220px;
		}
	}

	.hero-content {
		max-width: 50%;
		
		@media (max-width: 768px) {
			max-width: 100%;
		}
	}

	.hero-content h1 {
		margin: 0;
		font-size: 3rem;
		font-family: 'Orotund Regular', 'Courier New', Courier, monospace;
		color: var(--accent-color-light);
	}

	.hero-content p {
		margin: 0px 0;
		padding: 0%;
		font-size: 1.5rem;
		color: var(--text-color-alt);
		font-family: 'Arial, monospace';
	}
</style>
