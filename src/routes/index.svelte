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

<div>
	<div class="navbar bg-base-100 border-gray-500 border-b">
		<div class="flex-none">
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
		</div>
		<div class="flex-1">
			<a class="btn btn-ghost normal-case text-xl" href="/">FYN</a>
		</div>
		<div class="flex-none">
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
	<div>
		<div class="mx-auto w-[90%] mb-10">
			<div class="text-5xl uppercase mt-20 mx-2 font-black max-w-3xl">Currently Advailable</div>
		</div>

		<div class="flex w-fit mx-auto">
			<div class="grid h-500 flex card bg-base-300 rounded-box place-items-center">
				<img src={cardsat} alt="" />
				<div class="text-2xl uppercase font-bold">CARD SAT 1</div>
			</div>
			<div class="grid h-500 flex card bg-base-300 rounded-box place-items-center">
				<img src={cardsat} alt="" />
				<div class="text-2xl uppercase font-bold">CARD SAT 2</div>
			</div>
		</div>
		<div class="w- h-px bg-white mt-20 w-11/12 mx-auto" />
		<div class="mx-auto w-[90%] mb-10">
			<div class="text-6xl uppercase mt-20 mx-2 font-black max-w-3xl">FEATURES</div>
			<div class="mt-10 ml-10">
				<div class="btn-group">
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
				<div class="flex justify-between flex-wrap">
					<div class="mt-10">
						<p class="w-[300px]">
							{features[featuresIndex].description}
						</p>
					</div>
					<div class="w-[50%] min-w-[300px]">
						<img src={features[featuresIndex].image} alt="" />
					</div>
				</div>
			</div>
		</div>
		<div class="w- h-px bg-white mt-20 w-11/12 mx-auto" />
		<div class="mx-auto w-[90%] mb-10">
			<div class="text-6xl uppercase mt-20 mx-2 font-black max-w-3xl">STATUS</div>
			<div class="mx-auto mt-20 w-auto flex justify-center">
				<ul class="steps">
					<li class="step step-info">CARD SAT 1 DEVELOPED</li>
					<li class="step step-info">PREORDER</li>
					<li class="step step-neutral">PRODUCTION</li>
					<li class="step step-error" data-content="?">DELIVERY</li>
				</ul>
			</div>
		</div>

		<div class="divider" />
		<footer class="footer p-10 bg-base-300 text-base-content">
			<div>
				<img src="https://lakefox.net/assets/logo.png" class="w-10" alt="" />
				<p>FYN AREOSPACE LLC <br /> A LAKEFOX Company</p>
			</div>
			<div>
				<span class="footer-title">Social</span>
				<div class="grid grid-flow-col gap-4">
					<a href="/" title="Twitter"
						><svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							class="fill-current"
							><path
								d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
							/></svg
						></a
					>
					<a href="/" title="Youtube"
						><svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							class="fill-current"
							><path
								d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"
							/></svg
						></a
					>
					<a href="/" title="Facebook"
						><svg
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							class="fill-current"
							><path
								d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"
							/></svg
						></a
					>
				</div>
			</div>
		</footer>
	</div>
</div>
