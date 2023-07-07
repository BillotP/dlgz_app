<script lang="ts">
  import { page } from "$app/stores";
  import { PUBLIC_API_HOST } from "$env/static/public";
  import {
    StatKinds,
    type DelegatorStatItems,
    type StatValue,
  } from "$lib/delegators";
  import { onMount } from "svelte";

  let res: StatValue | undefined;
  let year = 2018;
  let loading = false;
  const startYear = 2018;
  const yearArray = Array.from(
    { length: new Date().getFullYear() - startYear + 1 },
    (_, i) => startYear + i
  );
  let kind = StatKinds.YEARLYVOLUME;
  async function getDelegatorStats() {
    loading = true;
    try {
      let bdy = await fetch(
        `${PUBLIC_API_HOST}/xtz/delegators/stats?year=${year}&kind=${kind}&delegator=${$page.params["address"]}`
      );
      if (bdy.status == 201) {
        // return getDelegatorStats();
        loading = false;
        return;
      }
      let chk = (await bdy.json()) as DelegatorStatItems;
      res = chk.data[0].value[0];
      loading = false;
    } catch (err) {
      console.error(err);
      loading = false;
    }
  }
  $: res;
  onMount(() => {
    getDelegatorStats();
  });
</script>

<div class="column">
  <div class="field has-addons">
    <div class="control is-expanded">
      <div class="select is-fullwidth">
        <select
          disabled={loading}
          class:is-loading={loading}
          bind:value={kind}
          on:change={() => getDelegatorStats()}
        >
          {#each Object.values(StatKinds).filter((a) => !a.startsWith("TOP")) as y, i}
            <option value={y}>{y}</option>
          {/each}
        </select>
      </div>
    </div>
  </div>
  <div class="field has-addons">
    <div class="control is-expanded">
      <div class="select is-fullwidth">
        <select
          disabled={loading}
          class:is-loading={loading}
          bind:value={year}
          on:change={() => getDelegatorStats()}
        >
          {#each yearArray as y}
            <option value={y}>{y}</option>
          {/each}
        </select>
      </div>
    </div>
  </div>
</div>
{#if res && res.value}
  <div class="card">
    <div class="card-title">
      <h2 class="title">
        {(Number(res.value) / 10e5 ).toLocaleString()} XTZ
        <a target="_blank" href={`https://tzstats.com/${res.delegator}`}>🔎</a>
      </h2>
    </div>
  </div>
{/if}
<!-- <div class="columns is-multiline m-2" style="height:60vh;overflow-y:auto;">
  <div class="column is-one-quarter">
  </div>
</div> -->
