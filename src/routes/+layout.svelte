<script lang="ts">
	import '../app.css';

	let { children } = $props();
</script>

<svelte:head>
	<title>한글 획 수 계산기</title>

	<meta property="og:url" content="https://korean-stroke.netlify.app/" />
	<meta property="og:site_name" content="한글 획 수 계산기" />
	<meta property="og:title" content="한글 획 수 계산기" />
	<meta property="og:description" content="무료 한글 획 수 계산기" />
	<meta property="og:locale" content="ko_KR" />
	<meta property="og:type" content="website" />
	<meta property="og:image" content="https://korean-stroke.netlify.app/favicon.png" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:image" content="https://korean-stroke.netlify.app/favicon.png" />
	<meta name="twitter:title" content="한글 획 수 계산기" />
	<meta name="twitter:description" content="무료 한글 획 수 계산기" />
	<meta itemprop="name" content="한글 획 수 계산기" />
	<meta itemprop="description" content="무료 한글 획 수 계산기" />
	<meta itemprop="datePublished" content="2025-04-0T22:54:35+09:00" />
	<meta itemprop="dateModified" content="2025-04-0T22:54:35+09:00" />
	<meta itemprop="image" content="https://korean-stroke.netlify.app/favicon.png" />
	<meta name="description" content="무료 한글 획 수 계산기" />
	<link rel="canonical" href="https://korean-stroke.netlify.app/" />
</svelte:head>

{@render children()}
