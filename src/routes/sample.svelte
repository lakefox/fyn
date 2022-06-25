<script>
	import cardsat from './assets/card_sat_wireframe.png';

	let featuresIndex = 0;

	let features = [
		{
			name: 'CARD SAT 1',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam corporis porro, totam alias consequuntur sint fugit velit perferendis nemo modi commodi blanditiis, quidem quo ea voluptates consequatur aliquam doloribus laudantium.',
			image: cardsat
		},
		{
			name: 'CARD SAT 2',
			description:
				'2Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam corporis porro, totam alias consequuntur sint fugit velit perferendis nemo modi commodi blanditiis, quidem quo ea voluptates consequatur aliquam doloribus laudantium.',
			image: cardsat
		}
	];

	$: console.log(featuresIndex);
</script>

<div class={'flex justify-center items-center flex-col'}>
	<div class={'navbar bg-base-100 border-gray-500 border-b'}>
		<button class="btn btn-square btn-ghost" title="Menu">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				class="inline-block w-5 h-5 stroke-current"
				><path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M4 6h16M4 12h16M4 18h16"
				/></svg
			>
		</button>
		<a class="btn btn-ghost normal-case text-xl" href="/">FYN</a>
		<div class={'flex justify-end items-center w-full'}>
			<button class="btn btn-square btn-ghost" title="Home">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					class="inline-block w-5 h-5 stroke-current"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
					/></svg
				>
			</button>
		</div>
	</div>
	<!-- Page Content -->
	<!-- Contain All Page Content within the w-[90%] div -->
	<!-- That way all page content will be the same width without repeating code -->
	<!-- Navbar and footer go outside this div so they take up the enitre page width -->
	<div class={'w-[90%]'}>
		<div>
			<div class="text-5xl uppercase mt-20 mx-2 font-black max-w-3xl">Currently Advailable</div>
			<div class={'flex justify-between items-center'}>
				<div class={'flex justify-center items-center flex-col'}>
					<img src={cardsat} alt="" />
					<div class="text-2xl uppercase font-bold">CARD SAT 1</div>
				</div>
				<div class={'flex justify-center items-center flex-col'}>
					<img src={cardsat} alt="" />
					<div class="text-2xl uppercase font-bold">CARD SAT 2</div>
				</div>
			</div>
		</div>
		<div class="h-px bg-white mt-20 w-11/12 mx-auto" />
		<div class={'flex flex-col justify-center items-start md:justify-between md:flex-row'}>
			<div class={'w-full md:w-1/2 flex flex-col justify-start items-start gap-5 mt-20'}>
				<div class="text-6xl uppercase mx-2 font-black">FEATURES</div>
				<div class={'btn-group'}>
					{#each features as feature, i}
						<input
							type="radio"
							name="options"
							data-title={feature.name}
							class="btn min-w-fit"
							bind:group={featuresIndex}
							value={i}
						/>
					{/each}
				</div>
				<p>{features[featuresIndex].description}</p>
			</div>
			<div>
				<img src={features[featuresIndex].image} alt="" />
			</div>
		</div>
	</div>
</div>
