<script lang="ts">
  import { onMount } from "svelte";
  import { PUBLIC_API_HOST } from "$env/static/public";
  import type { DelegationItems } from "../lib/delegation";

  const startYear = 2018;
  const yearArray = Array.from(
    { length: new Date().getFullYear() - startYear + 1 },
    (_, i) => startYear + i
  );
  let params = {
    page: 0,
    limit: 10,
    year: "",
  };
  let loading = false;
  let res: DelegationItems = { data: [] };
  async function doGetDelegations() {
    loading = true;
    try {
      let host = PUBLIC_API_HOST;
      let bdy = await fetch(
        `${host}/xtz/delegations?page=${params.page}&limit=${params.limit}&year=${params.year}`
      );
      res = await bdy.json();
      loading = false;
    } catch (err) {
      console.error(err);
      loading = false;
    }
  }
  onMount(() => doGetDelegations());
</script>

<div class="hero is-fullheight-with-navbar">
  <div class="hero is-small is-primary">
    <div class="hero-body">
      <span>
        <h1 class="title">Tezos Delegation Events</h1>
        <p class="subtitle">Ordered by most recent first</p>
      </span>
    </div>
  </div>
  <div class="colums is-mobile">
    <div class="column">
      <div class="card p-2">
        <div class="table-container" style="height: 35vh;overflow-y:scroll">
          <table
            class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth"
          >
            <!-- Your table content -->
            <thead style="width:100%;">
              <tr>
                <th><abbr title="Timestamp">Ts</abbr></th>
                <th><abbr title="Amount in XTZ">XTZ Amount</abbr></th>
                <th><abbr title="Delegator Address">Delegator</abbr></th>
                <th><abbr title="Block Height">Block</abbr></th>
              </tr>
            </thead>
            <tbody style="height: 100%;">
              {#each res.data as r}
                <tr>
                  <th>{r.timestamp}</th>
                  <td>
                    {Number(r.amount).toLocaleString()}
                  </td>
                  <td
                    >{r.delegator.length > 0 ? r.delegator : "👻 🥖"}
                    {#if r.delegator.length > 0}
                      <a
                        target="_blank"
                        href={`https://tzstats.com/${r.delegator}`}>🔎</a
                      >
                    {/if}
                  </td>
                  <td
                    >{r.block}
                    <a target="_blank" href={`https://tzstats.com/${r.block}`}
                      >🔎</a
                    >
                  </td>
                </tr>
              {/each}
            </tbody>
          </table>
        </div>
        <nav class="pagination is-centered" aria-label="pagination">
          <button
            class="pagination-previous"
            disabled={params.page == 0 || loading}
            on:click={() => {
              if (params.page == 0) return;
              params.page = params.page - 1;
              doGetDelegations();
            }}>Previous</button
          >
          <button
            class="pagination-next"
            disabled={loading}
            on:click={() => {
              params.page = params.page + 1;
              doGetDelegations();
            }}>Next page</button
          >
        </nav>
      </div>
    </div>
    <div class="column">
      <div class="card p-2">
        <div class="field">
          <label for="limit" class="label">Limit</label>
          <div class="control has-icons-left has-icons-right">
            <input
              id="limit"
              class="input"
              type="number"
              step="1"
              min="1"
              max="100"
              on:change={() => {
                if (params.limit > 100) {
                  params.limit = 100;
                }
              }}
              bind:value={params.limit}
              placeholder="Max results per page"
            />
            <span class="icon is-small is-left">
              <i class="fas fa-file" />
            </span>
            <span
              class="icon is-small is-right"
              class:is-danger={params.limit > 100}
            >
              <i class="fas fa-check" />
            </span>
          </div>
          {#if params.limit > 100}
            <p class="help is-danger">Max limit is 100</p>
          {/if}
        </div>

        <div class="field">
          <label for="page" class="label">Page</label>
          <div class="control has-icons-left has-icons-right">
            <input
              id="page"
              bind:value={params.page}
              class="input is-success"
              type="number"
              placeholder="Page setting"
              step="1"
              min="0"
              on:change={() => {
                if (params.page < 0) {
                  params.page = 0;
                }
              }}
            />
            <span class="icon is-small is-left">
              <i class="fas fa-file" />
            </span>
            <span class="icon is-small is-right">
              <i class="fas fa-check" />
            </span>
          </div>
        </div>

        <div class="field">
          <label for="year" class="label">Year</label>
          <div class="control is-expanded">
            <div class="select is-rounded is-fullwidth">
              <select id="year" bind:value={params.year}>
                <option selected value="">Any</option>
                {#each yearArray as y}
                  <option value={y}>{y}</option>
                {/each}
              </select>
            </div>
          </div>
        </div>

        <div class="field is-grouped">
          <div class="control">
            <button
              class="button is-link"
              disabled={loading}
              on:click={doGetDelegations}
              class:is-loading={loading}>Submit</button
            >
          </div>
          <div class="control">
            <button class="button is-link is-light">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
