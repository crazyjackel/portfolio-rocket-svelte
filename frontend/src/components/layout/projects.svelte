<div class="home-wrapper">
	<div class="workgrid">
		<div class="workgrid__item workgrid__item--1">
			<a href="/mono.html">
				<div class="workgrid__item__container">
					<div class="workgrid__item__title">mono characters</div>
					<div class="workgrid__item__content">
						<img src="/2x1.png" alt="mono-characters" />
					</div>
				</div>
			</a>
		</div>
		<div class="workgrid__item workgrid__item--2">
			<a href="/experiments.html">
				<div class="workgrid__item__container">
					<div class="workgrid__item__title">experiments</div>
					<div class="workgrid__item__content">
						<img src="/1x1.png" alt="refraction" />
					</div>
				</div>
			</a>
		</div>
		<div class="workgrid__item workgrid__item--3">
			<div class="workgrid__item__container">
				<div class="workgrid__item__content">
					<img src="/1x1.png" alt="spec icon" />
				</div>
			</div>
		</div>

		<div class="workgrid__item workgrid__item--4">
			<div class="workgrid__item__container">
				<div class="workgrid__item__content">
					<img src="/1x1.png" alt="spec icon" />
				</div>
			</div>
		</div>

		<div class="workgrid__item workgrid__item--5">
			<a href="/experiments.html">
				<div class="workgrid__item__container">
					<div class="workgrid__item__title">fabric wallpaper</div>
					<div class="workgrid__item__content">
						<img src="/1x2.png" alt="hand-crafted wallpapers" />
					</div>
				</div>
			</a>
		</div>

		<div class="workgrid__item workgrid__item--6">
			<a href="/lens.html">
				<div class="workgrid__item__container">
					<div class="workgrid__item__title">google lens</div>
					<div class="workgrid__item__content">
						<img src="/1x2.png" alt="google lens" />
					</div>
				</div>
			</a>
		</div>

		<div class="workgrid__item workgrid__item--7">
			<a href="/bttf.html">
				<div class="workgrid__item__container">
					<div class="workgrid__item__title">Time Experiment</div>
					<div class="workgrid__item__content">
						<img src="/1x1.png" alt="spec icon" />
					</div>
				</div>
			</a>
		</div>

		<div class="workgrid__item workgrid__item--8">
			<a href="/mono.html">
				<div class="workgrid__item__container">
					<div class="workgrid__item__title">
						mono studio<br />
						brand design
					</div>
					<div class="workgrid__item__content">
						<img src="/2x1.png" alt="mono-characters" />
					</div>
				</div>
			</a>
		</div>

		<div class="workgrid__item workgrid__item--9">
			<a href="/nga.html">
				<div class="workgrid__item__container">
					<div class="workgrid__item__title">
						next generation<br />assistant
					</div>
					<div class="workgrid__item__content">
						<img src="/1x1.png" alt="spec icon" />
					</div>
				</div>
			</a>
		</div>

		<div class="workgrid__item workgrid__item--10">
			<div class="workgrid__item__container">
				<div class="workgrid__item__content">
					<img src="/1x1.png" alt="spec icon" />
				</div>
			</div>
		</div>

		<div class="workgrid__item workgrid__item--11">
			<div class="workgrid__item__container">
				<div class="workgrid__item__content">
					<img src="/1x1.png" alt="spec icon" />
				</div>
			</div>
		</div>

		<div class="workgrid__item workgrid__item--12">
			<div class="workgrid__item__container">
				<div class="workgrid__item__content">
					<img src="/1x1.png" alt="spec icon" />
				</div>
			</div>
		</div>

		<div class="workgrid__item workgrid__item--13">
			<a href="/mindful.html">
				<div class="workgrid__item__container">
					<div class="workgrid__item__title">mindful editor</div>
					<div class="workgrid__item__content">
						<img src="/1x1.png" alt="spec icon" />
					</div>
				</div>
			</a>
		</div>

		<div class="workgrid__item workgrid__item--14">
			<div class="workgrid__item__container">
				<div class="workgrid__item__content">
					<img src="/1x1.png" alt="spec icon" />
				</div>
			</div>
		</div>

		<div class="workgrid__item workgrid__item--15">
			<a href="javascript:void(0)">
				<div class="workgrid__item__container">
					<div class="workgrid__item__title">
						google watch<br />concept (soon)
					</div>
					<div class="workgrid__item__content">
						<img src="/1x1.png" alt="spec icon" />
					</div>
				</div>
			</a>
		</div>

		<div class="workgrid__item workgrid__item--16">
			<a href="javascript:void(0)">
				<div class="workgrid__item__container">
					<div class="workgrid__item__title">ai expression (coming soon)</div>
					<div class="workgrid__item__content">
						<img src="/2x1.png" alt="mono-characters" />
					</div>
				</div>
			</a>
		</div>

		<div class="workgrid__item workgrid__item--17">
			<a href="/homehub.html">
				<div class="workgrid__item__container">
					<div class="workgrid__item__title">
						google<br />home hub
					</div>
					<div class="workgrid__item__content">
						<img src="/1x1.png" alt="spec icon" />
					</div>
				</div>
			</a>
		</div>
	</div>
</div>

<style lang="scss">
	* {
		box-sizing: border-box;
	}

	.home-wrapper {
		transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
	}

	.workgrid {
		grid-gap: 0.3rem;
		grid-template-areas:
			'area-1 area-2'
			'area-3 area-6'
			'area-5 area-6'
			'area-5 area-4'
			'area-7 area-9'
			'area-8 area-8'
			'area-8 area-8'
			'area-11 area-10'
			'area-13 area-12'
			'area-16 area-16'
			'area-15 area-17';
		margin: 0 auto;
		display: grid;
	}

	.workgrid__item {
		background: var(#121217);
		min-height: 100px;
		border-radius: 4px;
		position: relative;
		overflow: hidden;
		-webkit-mask-image: -webkit-radial-gradient(#fff, #000);
	}

	@for $i from 1 through 30 {
		.workgrid__item:nth-child(#{$i}) {
			grid-area: area-#{$i};
		}
	}

	.workgrid__item {
		padding-bottom: 80%;
	}
	.workgrid__item:nth-child(6),
	.workgrid__item:nth-child(5) {
		padding-bottom: 160%;
	}
	.workgrid__item:nth-child(16) {
		padding-bottom: 40%;
	}
	.workgrid__item:nth-child(3),
	.workgrid__item:nth-child(5),
	.workgrid__item:nth-child(4) {
		padding-bottom: 80%;
	}

	.workgrid__item__container,
	.workgrid__item__title,
	.workgrid__item a {
		position: absolute;
		inset: 0;
	}

	.workgrid__item__container,
	.workgrid__item__title,
	.workgrid__item a {
		position: absolute;
		inset: 0;
	}

	.workgrid__item__title {
		line-height: var(1.65em);
		pointer-events: none;
		text-align: center;
		color: #fff;
		z-index: 10;
		opacity: 0;
		background: #00000080;
		justify-content: center;
		align-items: center;
		display: flex;
	}

	.workgrid__item__content {
		height: 100%;
		width: 100%;
		align-items: center;
		display: flex;
	}

	.workgrid__item:hover a .workgrid__item__content {
		filter: blur(44px);
		transform: scale(1.5);
	}

	@keyframes hueRotate {
		from {
			filter: hue-rotate(0deg);
		}
		to {
			filter: hue-rotate(360deg);
		}
	}

	.workgrid__item a:hover {
		-webkit-animation: hueRotate 10s infinite;
		animation: hueRotate 10s infinite;
		.workgrid__item__title {
			opacity: 1;
		}
	}

	.workgrid__item img {
		max-width: none;
		width: 100%;
	}

	@media (min-width: 48em) {
		.workgrid {
			grid-gap: 0.3rem;
			grid-template-areas:
				'area-1 area-1 area-2 area-3'
				'area-5 area-9 area-6 area-7'
				'area-5 area-4 area-6 area-12'
				'area-11 area-8 area-8 area-13'
				'area-10 area-8 area-8 area-14'
				'area-15 area-16 area-16 area-17';
			margin: 0 auto;
			display: grid;
		}
		.workgrid__item:nth-child(1),
		.workgrid__item:nth-child(2),
		.workgrid__item:nth-child(3),
		.workgrid__item:nth-child(4),
		.workgrid__item:nth-child(7),
		.workgrid__item:nth-child(9),
		.workgrid__item:nth-child(10),
		.workgrid__item:nth-child(11),
		.workgrid__item:nth-child(12),
		.workgrid__item:nth-child(13),
		.workgrid__item:nth-child(14),
		.workgrid__item:nth-child(15),
		.workgrid__item:nth-child(16),
		.workgrid__item:nth-child(17) {
			padding-bottom: 40%;
		}
		.workgrid__item:nth-child(5),
		.workgrid__item:nth-child(4),
		.workgrid__item:nth-child(9),
		.workgrid__item:nth-child(7),
		.workgrid__item:nth-child(12),
		.workgrid__item:nth-child(6),
		.workgrid__item:nth-child(8) {
			padding-bottom: 80%;
		}
	}

	@media (min-width: 75em) {
		.workgrid {
			grid-gap: 0.3rem;
			grid-template-areas:
				'area-1 area-1 area-2 area-3 area-4 area-5'
				'area-6 area-7 area-8 area-8 area-9 area-5'
				'area-6 area-10 area-8 area-8 area-11 area-12'
				'area-13 area-14 area-15 area-16 area-16 area-17';
			margin: 0 auto;
			display: grid;
		}
		.workgrid__item:nth-child(1),
		.workgrid__item:nth-child(2),
		.workgrid__item:nth-child(3),
		.workgrid__item:nth-child(4),
		.workgrid__item:nth-child(7),
		.workgrid__item:nth-child(9),
		.workgrid__item:nth-child(10),
		.workgrid__item:nth-child(11),
		.workgrid__item:nth-child(12),
		.workgrid__item:nth-child(13),
		.workgrid__item:nth-child(14),
		.workgrid__item:nth-child(15),
		.workgrid__item:nth-child(16),
		.workgrid__item:nth-child(17) {
			padding-bottom: 40%;
		}
		.workgrid__item:nth-child(5),
		.workgrid__item:nth-child(6),
		.workgrid__item:nth-child(8) {
			padding-bottom: 80%;
		}
	}
</style>
