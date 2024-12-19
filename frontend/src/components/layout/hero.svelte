<script>
	export let blogPosts = [
		{
			title: 'Blog Post Title 1',
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac bibendum nulla.'
		},
		{
			title: 'Blog Post Title 2',
			content:
				'Vivamus consequat, metus id interdum suscipit, felis felis vulputate nulla, id commodo est erat at justo.'
		},
		{
			title: 'Blog Post Title 3',
			content:
				'Donec vehicula, neque a volutpat consequat, libero justo fermentum odio, non malesuada libero purus vel urna.'
		},
		{
			title: 'Blog Post Title 4',
			content: 'Praesent ut ligula non mi varius sagittis. Curabitur ullamcorper ultricies nisi.'
		},
		{
			title: 'Blog Post Title 5',
			content: 'Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus.'
		}
	];

	export let heroImage = '1x1.png';
	export let heroTitle = 'About Me';
	export let heroDescription =
		"Hi, I'm John Doe, a passionate developer who loves building amazing things for the web.";
</script>

<div class="container">
	<div class="blog-section">
		{#each blogPosts as post}
			<div class="blog-post">
				<h2>{post.title}</h2>
				<p>{post.content}</p>
			</div>
		{/each}
	</div>
	<div class="hero-section">
		<div class="hero-content">
			<h1>{heroTitle}</h1>
			<p>{heroDescription}</p>
		</div>
		<div class="hero-image" style="background-image: url('{heroImage}');"></div>
	</div>
</div>

<style lang="scss">
	.container {
		display: flex;
		width: 100%;
		margin-bottom: 2em;
	}

	.blog-section {
		flex: 0.2;
		max-height: 85vh;
        height: 85vh;
		overflow-y: auto;
		padding: 10px;
		border-right: 3px dashed #dddddd44;
		direction: rtl;
	}

	*::-webkit-scrollbar {
		direction: ltr;
		width: 12px;
	}
	*::-webkit-scrollbar-track {
		background: transparent;
	}
	*::-webkit-scrollbar-thumb {
		background-color: #10151b;
		border-radius: 20px;
		border: 3px solid transparent;
		background-clip: content-box;
	}

	.blog-post {
		margin-bottom: 15px;
		padding: 10px;
		border-radius: 10px;
		box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
		transform: rotate(-2deg);
		position: relative;
	}
	// Define a list of pastel colors
	$pastel-colors: #dedecc, #9ba7a5, #939798, #dfdecc, #b5c3c5;

	@for $i from 0 through 30 {
		.blog-post:nth-child(#{$i + 1}) {
			background: nth($pastel-colors, ($i % length($pastel-colors)) + 1);
		}
	}

    .blog-post:nth-child(even) {
		transform: rotate(2deg);
    }

	.blog-post h2 {
		margin: 0;
		font-size: 1.2rem;
		color: #333;
	}

	.blog-post p {
		margin: 5px 0 0;
		font-size: 1rem;
		color: #444;
	}
	.hero-section {
		flex: 0.8;
		padding: 40px;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-around;
		background-color: #eaeaea00;
	}

	.hero-image {
		width: 300px;
		height: 300px;
		border-radius: 50%;
		background-color: #dddddd00;
		background-size: cover;
		background-position: center;
	}

	.hero-content {
		max-width: 50%;
	}

	.hero-content h1 {
		margin: 0;
		font-size: 4rem;
	}

	.hero-content p {
		margin: 20px 0;
		font-size: 1.5rem;
		color: #555;
	}
</style>
