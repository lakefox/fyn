<script>
	import cardsat from './assets/card_sat_wireframe.png';
	import startracker from './assets/star_tracker.png';
	import balloon from './assets/balloon.png';
	import logo from './assets/logo_black.png';
	import DiTerminal from 'svelte-icons/di/DiTerminal.svelte';

	let cardsatsIndex = 0;

	let cardsats = [
		{
			name: 'CARD SAT 1',
			description:
				'Card sat 1 is a high-powered single-board satellite capable of sending and receiving messages from low-cost transceivers on the ground. It includes a full suite of cardsats like satellite-to-satellite communication so you can transmit across the globe.',
			image: cardsat,
			docs: '/'
		},
		{
			name: 'CARD SAT 2',
			description:
				'2Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam corporis porro, totam alias consequuntur sint fugit velit perferendis nemo modi commodi blanditiis, quidem quo ea voluptates consequatur aliquam doloribus laudantium.',
			image: startracker,
			docs: '/'
		},
		{
			name: 'CARD SAT 3',
			description:
				'2Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam corporis porro, totam alias consequuntur sint fugit velit perferendis nemo modi commodi blanditiis, quidem quo ea voluptates consequatur aliquam doloribus laudantium.',
			image: startracker,
			docs: '/'
		}
	];

	let components = [
		{
			name: 'STAR TRACKER',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam corporis porro, totam alias consequuntur sint fugit velit perferendis nemo modi commodi blanditiis, quidem quo ea voluptates consequatur aliquam doloribus laudantium.',
			image: startracker,
			docs: '/'
		},
		{
			name: 'REACTION WHEELS',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam corporis porro, totam alias consequuntur sint fugit velit perferendis nemo modi commodi blanditiis, quidem quo ea voluptates consequatur aliquam doloribus laudantium.',
			image: balloon,
			docs: '/'
		},
		{
			name: 'STEREO CAM',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam corporis porro, totam alias consequuntur sint fugit velit perferendis nemo modi commodi blanditiis, quidem quo ea voluptates consequatur aliquam doloribus laudantium.',
			image: cardsat,
			docs: '/'
		}
	];

	// ,
	// 	{
	// 		name: 'STAR TRACKER',
	// 		description:
	// 			'2Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam corporis porro, totam alias consequuntur sint fugit velit perferendis nemo modi commodi blanditiis, quidem quo ea voluptates consequatur aliquam doloribus laudantium.',
	// 		image: startracker,
	// 		docs: '/'
	// 	}

	$: console.log(cardsatsIndex);
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
			<button class="btn btn-square btn-ghost" title="SHELL"> <DiTerminal /> </button>
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
				<img src={startracker} alt="" />
				<div class="text-2xl uppercase font-bold">STAR TRACKER</div>
			</div>
		</div>
		<div class="w- h-px bg-white mt-20 w-11/12 mx-auto" />
		<div class="mx-auto w-[90%] mb-10 flex overflow-x-auto justify-start md:justify-center">
			{#each components as component}
				<div class="card w-96 bg-base-100 shadow-xl min-w-[300px]">
					<figure class="px-10 pt-10">
						<img src={component.image} alt={component.name} class="rounded-xl" />
					</figure>
					<div class="card-body items-center text-center">
						<h2 class="card-title">{component.name}</h2>
						<p>{component.description}</p>
						<div class="card-actions">
							<button class="btn btn-primary">Learn More</button>
						</div>
					</div>
				</div>
			{/each}
		</div>
		<div class="flex justify-center">
			<div class="mr-20">
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="fill-white"
					><path
						d="m4.431 12.822 13 9A1 1 0 0 0 19 21V3a1 1 0 0 0-1.569-.823l-13 9a1.003 1.003 0 0 0 0 1.645z"
					/></svg
				>
			</div>
			<div class="ml-20">
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="fill-white"
					><path
						d="M5.536 21.886a1.004 1.004 0 0 0 1.033-.064l13-9a1 1 0 0 0 0-1.644l-13-9A1 1 0 0 0 5 3v18a1 1 0 0 0 .536.886z"
					/></svg
				>
			</div>
		</div>
		<div class="w- h-px bg-white mt-20 w-11/12 mx-auto" />
		<div class="mx-auto w-[90%] mb-10">
			<div class="text-6xl uppercase mt-20 mx-2 font-black max-w-3xl">CARDSATS</div>
			<div class="mt-10">
				<div class="btn-group">
					{#each cardsats as cardsat, i}
						<input
							type="radio"
							name="options"
							data-title={cardsat.name}
							class="btn min-w-fit"
							bind:group={cardsatsIndex}
							value={i}
						/>
					{/each}
				</div>
				<!-- <div class="flex justify-between flex-wrap"> -->
				<div class="flex flex-col justify-center items-center sm:flex-row sm:justify-between">
					<div class="mt-10 w-[300px] sm:h-[500px] text-center">
						<p class="text-left">
							{cardsats[cardsatsIndex].description}
						</p>
						<a href={cardsats[cardsatsIndex].docs}
							><div class="btn btn-ghost mt-10 btn-active mx-auto">DOCUMENTATION</div></a
						>
					</div>
					<div class="w-[50%] min-w-[300px]">
						<img src={cardsats[cardsatsIndex].image} alt="" />
					</div>
				</div>
			</div>
		</div>
		<div class="w- h-px bg-white mt-20 w-11/12 mx-auto" />
		<div class="mx-auto w-[90%] mb-10">
			<div class="hero mt-40 mb-40 bg-base-200">
				<div class="hero-content flex-col lg:flex-row-reverse">
					<img src={balloon} class="max-w-[90%] rounded-lg shadow-2xl" alt="balloon" />
					<div>
						<h1 class="text-5xl font-bold">NEED LAUNCH ASSISTANCE?</h1>
						<p class="py-6">
							We're excited to offer our new suborbital balloon launch service. For just $100 per
							month per 1U, you can launch your payload into space! This is an incredible
							opportunity to get your experiments or payloads into space quickly and cheaply. We
							provide a plug and play system that includes all the power and datalink capabilites
							you need.
						</p>
						<button class="btn btn-primary">Get Started</button>
					</div>
				</div>
			</div>
		</div>
		<div class="w- h-px bg-white mt-20 w-11/12 mx-auto" />
		<div class="mx-auto w-[90%] mb-40">
			<div class="text-6xl uppercase mt-20 mx-2 font-black max-w-3xl">STATUS</div>
			<div class="mx-auto mt-20 w-auto flex justify-center">
				<ul class="steps">
					<li class="step step-info">CARD SAT 1 DEVELOPED</li>
					<li class="step step-info">WAITLIST</li>
					<li class="step step-neutral">PREORDER</li>
					<li class="step step-error" data-content="?">PRODUCTION</li>
				</ul>
			</div>
			<div class="hero min-h-fit mt-20 bg-base-200">
				<div class="hero-content flex-col lg:flex-row-reverse">
					<div class="text-center lg:text-left">
						<h1 class="text-5xl font-bold">Join the waitlist!</h1>
						<p class="py-6">
							If you're interested in a CARD SAT 1's development, we encourage you to join the
							waitlist! This way, you can be one of the first to know when CARD SAT 1 is available.
							Plus, you'll be able to give us feedback on the product before it hits the market!
						</p>
					</div>
					<div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
						<!-- svelte-ignore a11y-label-has-associated-control -->
						<div class="card-body">
							<div class="form-control">
								<label class="label">
									<span class="label-text">Email</span>
								</label>
								<input type="text" placeholder="email" class="input input-bordered" />
							</div>
							<div class="form-control mt-6">
								<button class="btn btn-primary">Join!</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="divider" />
		<footer class="footer p-10 bg-base-300 text-base-content">
			<div>
				<img src={logo} class="w-10" alt="" />
				<p>FYN AREOSPACE LLC</p>
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
