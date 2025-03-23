<script>
	import Article from '$components/layout/article.svelte';
	import Page from '$layouts/page.svelte';
    import { base } from '$app/paths';
</script>

<Page class="page">
	<Article title="Trainworks Reloaded">
		<div slot="image">
			<img src="{base}/Trainworks.png" alt="trainworks" style="border-image: url('{base}/Border.png') 11 repeat;" />
		</div>
		<div slot="content" class="content">
			<p class="centered-button">
				<a
					href="https://github.com/Monster-Train-2-Modding-Group/Trainworks-Reloaded"
					target="_blank"
					class="github-button">View on GitHub</a
				>
			</p>
			<p>
				<a
					href="https://github.com/Monster-Train-2-Modding-Group/Trainworks-Reloaded"
					target="_blank">Trainworks Reloaded</a
				>
				is an advanced modding framework designed to facilitate the injection of custom game-specific
				data into the video game:
				<a href="https://store.steampowered.com/app/2742830/Monster_Train_2/" target="_blank"
					>Monster Train 2</a
				>. This framework streamlines the process of extending and modifying the game's core
				functionality by leveraging a tailored
				<a href="https://json-schema.org/" target="_blank">JSON Schema</a>
				as a configuration medium, which is subsequently interpreted to construct a dependency injection
				container using the widely adopted
				<a href="https://simpleinjector.org/" target="_blank">SimpleInjector</a> IoC (Inversion of Control)
				library.
			</p>
			<p>
				The JSON Schema defines a structured format for mod developers to describe and configure
				various game data objects. During the framework's data ingestion process, the JSON-defined
				elements are parsed, instantiated, and mapped into modded registers. These registers serve
				as intermediary data structures that hold onto mod data before it is finalized with all the
				other registered data. Once done, data from the registers will be seemlessly integrated
				through runtime patching mechanisms via the <a
					href="https://harmony.pardeike.net/"
					target="_blank">HarmonyX</a
				>
				library and
				<a href="https://bepinex.github.io/" target="_blank">BepInEx</a> Modloader. Together, they seemlessly
				add our data in through the game's internal data constructs.
			</p>
			<p>
				A notable feature of Trainworks Reloaded is its robust support for <a
					href="https://unity.com/"
					target="_blank">Unity</a
				>-specific constructs, such as GameObjects, Sprites, and related asset types. This
				capability empowers mod developers to construct complex game elements that can be seemlessly
				referenced by various injection processes. Due to the Open-Nature of IOC and the ability for
				secondary mods to add additional decorators, services, and constructs, other mods can easily
				real in extra metadata from the JSON and provide cool integrations with minimal
				incompatibility.
			</p>
			<p>
				By abstracting much of the complexity typically associated with modding frameworks,
				Trainworks Reloaded significantly lowers the entry barrier for developers seeking to create
				immersive and innovative content for Monster Train 2. Its modular architecture, combined
				with SimpleInjector's powerful dependency injection capabilities, ensures that modded
				content can be efficiently managed, tested, and deployed without compromising game stability
				or compatibility.
			</p>
			<p>
				In essence, Trainworks Reloaded offers a comprehensive solution for modifying and extending
				Monster Train 2, combining powerful data parsing techniques, runtime patching strategies,
				and Unity asset management to enable a streamlined mod development workflow.
			</p>
			<p class="centered-button">
				<a
					href="https://github.com/your-repo/trainworks-reloaded"
					target="_blank"
					class="github-button">View on GitHub</a
				>
			</p>
		</div>
	</Article>
</Page>

<style>
	a {
		color: var(--accent-color-alt);
	}
	img {
		border-style: solid;
		border-width: 11px;
		max-width: 80%;
	}
	.content {
		padding-top: 1%;
		padding-bottom: 1%;
		padding-left: 4%;
		padding-right: 4%;
	}
	p {
		text-align: left;
		text-justify: auto;
		font-size: 1.2rem;
		color: var(--text-color);
		line-height: 1.6;
		text-shadow: #000 5px 0 5px;
	}
	.centered-button {
		text-align: center;
		margin-top: 0.5rem;
	}
	.github-button {
		background-color: var(--background-color-alt);
		color: var(--text-color);
		padding: 0.5rem 1rem;
		border-radius: 7px;
        border: 5px solid var(--accent-color) ;
		text-decoration: none;
		font-weight: bold;
		transition: background-color 0.3s ease;
		display: inline-block;
		text-align: center;
	}
	.github-button:hover {
		background-color: var(--accent-color-alt);
	}
    @media (max-width: 750px) {
      p {
		text-align: center;
      }
    }
</style>
