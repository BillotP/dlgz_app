<script>
  import { base } from "$app/paths";
  import { page } from "$app/stores";
</script>

<div class="hero">
  <div class="hero is-small is-primary">
    <div class="hero-body">
      <span>
        <h1 class="title">Tezos Delegators</h1>
      </span>
    </div>
  </div>
  <div class="tabs is-boxed mb-2">
    <ul>
      <li class:is-active={$page.url.pathname == `${base}/delegator`}>
        <a href={`${base}/delegator`}>All</a>
      </li>
      <li class:is-active={$page.url.pathname.startsWith(`${base}/delegator/stats`)}>
        <a href={`${base}/delegator/stats`}>Stats</a>
      </li>
    </ul>
  </div>
  <slot />
</div>
