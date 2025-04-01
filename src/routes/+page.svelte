<script lang="ts">
	import { countKoreanStroke } from 'count-korean-stroke';

	let text = $state('');
	let strokes: Array<Array<string | number>> = $state([]);
	let totalStrokes = $state(0);
	let nonStrict = $state(false);
	let showDetails = $state(false);

	function calculateStrokes() {
		strokes = [];

		for (const char of text) {
			if (char === ' ') {
				continue;
			}

			strokes = [...strokes, [char, countKoreanStroke(char, !nonStrict)]];
		}

		totalStrokes = countKoreanStroke(text, !nonStrict);
	}
</script>

<div
	class="mx-auto mt-12 max-w-[90%] space-y-4 rounded-xl border border-gray-200 bg-white p-6 shadow-lg md:max-w-2xl"
>
	<h1 class="text-3xl font-extrabold text-gray-900">한글 획 수 계산기</h1>
	<label class="flex items-center space-x-2">
		<input
			type="checkbox"
			bind:checked={nonStrict}
			class="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
		/>
		<span class="text-sm text-gray-700">꺾이는 모든 부분을 획 수로 계산하기</span>
	</label>
	<textarea
		bind:value={text}
		placeholder="글자를 입력하세요"
		rows="4"
		cols="50"
		class="w-full rounded-lg border border-gray-300 p-3 text-sm text-gray-800 placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
	></textarea>
	<br />
	<button
		onclick={calculateStrokes}
		class="w-full rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
	>
		계산하기
	</button>

	{#if totalStrokes > 0}
		<div class="result rounded-lg bg-gray-50 p-6 shadow-inner">
			<h2 class="text-2xl font-semibold text-gray-800">결과</h2>
			<div class="mt-4">
				<button
					onclick={() => (showDetails = !showDetails)}
					class="rounded-lg bg-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-300 focus:ring-2 focus:ring-gray-400 focus:outline-none"
				>
					{showDetails ? '숨기기' : '자세히 보기'}
				</button>
				{#if showDetails}
					<div class="mt-4 flex flex-wrap gap-4">
						{#each strokes as [char, count]}
							<span
								class="inline-block rounded-md bg-gray-100 px-3 py-1 text-sm text-gray-800 shadow"
							>
								<strong>{char}</strong>: {count}
							</span>
						{/each}
					</div>
				{/if}
			</div>
			<div class="mt-6 text-lg text-gray-900">
				<strong>총 획 수:</strong>
				{totalStrokes} 획
			</div>
		</div>
	{/if}
</div>
