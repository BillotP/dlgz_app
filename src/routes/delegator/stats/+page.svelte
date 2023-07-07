<script lang="ts">
  import { base } from "$app/paths";
  import { PUBLIC_API_HOST } from "$env/static/public";
  import {
    StatKinds,
    type DelegatorStatItems,
    type StatValue,
  } from "$lib/delegators";
  import { onMount } from "svelte";

  let res: StatValue[] = [];
  let year = 2018;
  let filter = "";
  let loading = false;
  const startYear = 2018;
  const yearArray = Array.from(
    { length: new Date().getFullYear() - startYear + 1 },
    (_, i) => startYear + i
  );
  let kind = StatKinds.TOP10DELEGATORS;
  async function getDelegatorStats() {
    loading = true;
    try {
      let bdy = await fetch(
        `${PUBLIC_API_HOST}/xtz/delegators/stats?year=${year}&kind=${kind}`
      );
      if (bdy.status == 201) {
        return getDelegatorStats();
      }
      let chk = (await bdy.json()) as DelegatorStatItems;
      res = chk.data[0].value;
      loading = false;
    } catch (err) {
      console.error(err);
      loading = false;
    }
  }
  onMount(() => {
    getDelegatorStats();
  });
  // function updateFilter() {
    
  // }
  // $: filter && () => {
  //   res.filter((a) => a.delegator.startsWith(filter)),
  //   res = res
  // }
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
          {#each Object.keys(StatKinds).filter( (a) => a.startsWith("TOP") ) as y, i}
            <option value={Object.values(StatKinds)[i]}>{y}</option>
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
  <div class="field">
    <div class="control">
      <label class="radio">
        <input
          bind:group={filter}
          value=""
          type="radio"
          on:toggle={() => {
            getDelegatorStats().finally(() => {
              res.filter((a) => a.delegator.startsWith(filter));
              res = res;
            });
          }}
        />
        All
      </label>
      <label class="radio">
        <input
          type="radio"
          on:toggle={() => {
            getDelegatorStats().finally(() => {
              res.filter((a) => a.delegator.startsWith(filter));
              res = res;
            });
          }}
          bind:group={filter}
          value="KT"
        />
        Contracts
      </label>
      <label class="radio">
        <input
          type="radio"
          on:toggle={() => {
            getDelegatorStats().finally(() => {
              res.filter((a) => a.delegator.startsWith(filter));
              res = res;
              console.log(res);
            });
          }}
          bind:group={filter}
          value="tz"
        />
        User Address
      </label>
    </div>
  </div>
</div>
<div class="columns is-multiline m-2" style="height:60vh;overflow-y:auto;">
  {#each res as r, i}
    <div class="column is-one-quarter">
      <div class="card">
        <div class="card-title">
          <h2 class="title">
            {i + 1} :
            <a href={`${base}/delegator/stats/${r.delegator}`}
              >{r.delegator}
            </a>
            <a target="_blank" href={`https://tzstats.com/${r.delegator}`}>🔎</a
            >
          </h2>
          <p class="subtitle">
            {(Number(r.value) / 10e5).toLocaleString()} XTZ
          </p>
        </div>
      </div>
    </div>
  {/each}
</div>
