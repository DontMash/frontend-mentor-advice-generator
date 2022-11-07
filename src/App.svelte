<script lang="ts">
  import { onMount } from 'svelte';
  import Footer from './lib/Footer.svelte';
  import IconDice from './lib/icons/IconDice.svelte';

  type Slip = {
    id: number;
    advice: string;
  };
  const API_URL: string = 'https://api.adviceslip.com/advice';

  let slip: Slip;
  const getSlip = async (): Promise<Slip> => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error(`[${response.status}] ${response.statusText}`, {
          cause: response.body,
        });
      }

      const { slip } = await response.json();
      return slip;
    } catch (error) {
      console.error(error);
    }
  };
  const rollDice = async () => {
    slip = await getSlip();
  };

  onMount(async () => {
    await rollDice();
  });
</script>

<main class="flex justify-center items-center min-h-screen p-4">
  <h1 class="sr-only">Advice Generator</h1>
  <article
    class="relative flex flex-col justify-between max-w-sm min-h-[256px] px-6 md:px-10 pt-10 pb-12 mb-7 rounded-xl bg-dark-grayish-blue text-center shadow-xl space-y-4"
  >
    <a
      class="transition-transform hover:scale-105"
      href="https://api.adviceslip.com/"
      target="_blank"
      rel="noreferrer"
    >
      <h2 class="text-xs text-neon-green tracking-[0.3em] uppercase">
        Advice #{slip?.id}
      </h2>
    </a>
    <blockquote class="text-2xl before:content-['“'] after:content-['”']">
      {slip?.advice}
    </blockquote>
    <picture class="block py-2">
      <source srcset="/images/pattern-divider-desktop.svg" media="(min-width: 768px)" />
      <source srcset="/images/pattern-divider-mobile.svg" />
      <img
        class="mx-auto"
        src="/images/pattern-divider-mobile.svg"
        alt=""
        width="295"
        height="16"
      />
    </picture>
    <button
      class="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2"
      on:click={(event) => rollDice()}
    >
      <div
        class="p-4 rounded-full bg-neon-green transition-all hover:shadow-neon-green hover:shadow-glow hover:scale-105 motion-safe:animate-pop"
      >
        <span class="sr-only">Generate advice</span>
        <IconDice />
      </div>
    </button>
  </article>
</main>
<Footer />
