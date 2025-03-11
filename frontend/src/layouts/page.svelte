<script>
	import Header from '$components/layout/header.svelte';
	import Projects from '$components/layout/projects.svelte';
</script>

<Header></Header>
<main id="content" tabindex="-1">
	<slot />
</main>

<style>
	:root {
    	/* Background Colors */
		--background-color: #1a1a1a;         /* Default Dark background */
		--background-color-light: #2a2a2a;    /* Slightly lighter background */
		--background-color-dark: #0f0f0f;     /* Ultra-dark for deep contrast */
		--background-color-alt: #131313;      /* Neutral alternative */

		/* Text Colors */
		--text-color: #f0f0f0;                /* Soft white text */
		--text-color-light: #ffffff;           /* Pure white for emphasis */
		--text-color-dark: #b0b0b0;            /* Subtle muted text */
		--text-color-alt: #d1d1d1;             /* Neutral alternative */

		/* Accent Colors */
		--accent-color: #d1a26c;              /* Copper pipe accent */
		--accent-color-light: #e6c79f;         /* Lighter copper for highlights */
		--accent-color-dark: #a37445;          /* Deeper copper for shadows */
		--accent-color-alt: #b78654;           /* Balanced alternative copper */

		/* Highlight Colors */
		--highlight-color: #e6d7c3;           /* Creamy text highlight */
		--highlight-color-light: #f8eee6;      /* Brightest cream for standout text */
		--highlight-color-dark: #cbb8a4;       /* Warmer, subdued highlight */
		--highlight-color-alt: #d9c4b0;        /* Neutral alternative */

		/* Border Colors */
		--border-color: #3d3d3d;              /* Standard dark border */
		--border-color-light: #5a5a5a;         /* Softer border */
		--border-color-dark: #1e1e1e;          /* Deeper, shadow-like border */
		--border-color-alt: #282828;           /* Balanced alternative border */
	}


	:global(body){
		background-color: #0d1620;
		margin: 0px;
		background-image:  
			linear-gradient(217deg, rgba(13,22,120,.5), rgba(13,22,32,0) 70.71%),
            linear-gradient(127deg, rgba(26,30,66,.5), rgba(13,22,32,0) 70.71%),
            linear-gradient(336deg, rgba(42,22,32,.5), rgba(13,22,32,0) 70.71%),
			url('/stars.png');
  		background-repeat: repeat; /* Repeat the image to fill the space */
	}

	@font-face {
		font-family: 'Orotund Regular';
		src: url('/OrotundRegular.ttf') format('truetype');
		font-weight: normal;
		font-style: normal;
	}
	@font-face {
		font-family: "Winthorpe Sc";
		src: url("https://db.onlinewebfonts.com/t/d576e1b78ab2508f9aa332e100ad45aa.eot");
		src: url("https://db.onlinewebfonts.com/t/d576e1b78ab2508f9aa332e100ad45aa.eot?#iefix")format("embedded-opentype"),
		url("https://db.onlinewebfonts.com/t/d576e1b78ab2508f9aa332e100ad45aa.woff2")format("woff2"),
		url("https://db.onlinewebfonts.com/t/d576e1b78ab2508f9aa332e100ad45aa.woff")format("woff"),
		url("https://db.onlinewebfonts.com/t/d576e1b78ab2508f9aa332e100ad45aa.ttf")format("truetype"),
		url("https://db.onlinewebfonts.com/t/d576e1b78ab2508f9aa332e100ad45aa.svg#Winthorpe Sc")format("svg");
	}
</style>