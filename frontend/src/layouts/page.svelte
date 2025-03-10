<script>
	import Header from '$components/layout/header.svelte';
	import Projects from '$components/layout/projects.svelte';
</script>

<Header></Header>
<main id="content" tabindex="-1">
	<slot />
</main>

<style>
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