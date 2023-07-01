<script lang="ts">
  import { PUBLIC_API_HOST } from "$env/static/public";
</script>

<div class="hero is-small is-primary">
  <div class="hero-body">
    <h1 class="title">Application Documentation</h1>
    <p class="subtitle">CONTENT-TYPE  endpoint</p>

  </div>
</div>
<div class="column" style="max-height: 80vh;overflow-y:scroll">
  <div class="tile is-ancestor">
    <div class="tile is-vertical is-8">
      <div class="tile">
        <div class="tile is-parent is-vertical">
          <article class="tile is-child notification is-info">
            <h3 class="title">
              JSON <a
                target="_blank"
                href={`${PUBLIC_API_HOST}/xtz/delegations`}>/xtz/delegations</a
              >
            </h3>
            <p class="subtitle">
              Get the last delegations made on the Tezos network
            </p>
            <div class="columns">
              <div class="column">
                <p class="has-text-left mb-2">Optional query parameters :</p>
                <li>
                  Year : `year=YYYY` 2018 &gt;= YYYY &lt;= {new Date().getFullYear()}
                </li>
                <li>Limit: `limit=X` 0 &gt; X &lt;= 100</li>
                <li>Page: `page=X` 0 &gt;= X &lt;= &infin;</li>
              </div>
              <div class="column">
                <p class="has-text-left mb-1">
                  API Responses code and format :
                </p>
                <li>
                  200 : <span
                    >[&lbrace; "timestamp": "RFC3339 Timestamp String",
                    "amount": "XTZ Amount String", "delegator": "Delegator
                    Address String", "block": "Block Height String"
                    &rbrace;,...]</span
                  >
                </li>
                <li>
                  400 : <span>
                    &lbrace; "message": "invalid parameter [param]" &rbrace;</span
                  >
                </li>
                <li>
                  500 : <span
                    >&lbrace; "message": "something went bad, try again later"
                    &rbrace;</span
                  >
                </li>
              </div>
            </div>
          </article>
          <article class="tile is-child notification is-warning">
            <h3 class="title">
              JSON <a target="_blank" href={`${PUBLIC_API_HOST}/xtz/sync`}
                >/xtz/sync</a
              >
            </h3>
            <p class="subtitle">Get last synchronized delegation</p>
            <div class="columns">
              <div class="column">
                <p class="has-text-left mb-1">Optional query parameters :</p>
                <li>NA</li>
              </div>
              <div class="column">
                <p class="has-text-left mb-1">API Responses code and format :</p>
                <li>
                  200 : <span
                    >&lbrace; "id": "Reference API item ID Number",
                    "timestamp": "RFC3339 Timestamp String", "amount": "XTZ
                    Amount String", "delegator": "Delegator Address String",
                    "block_hash": "Block Hash String", "block_level": "Block
                    Level Number" &rbrace;</span
                  >
                </li>
                <li>
                  500 : <span
                    >&lbrace; "message": "something went bad, try again later"
                    &rbrace;</span
                  >
                </li>
              </div>
            </div>
          </article>
          <article class="tile is-child notification is-info">
            <h3 class="title">HTTP <a target="_blank" href={`${PUBLIC_API_HOST}/health`}>/health</a></h3>
            <p class="subtitle">Check service availability</p>
          </article>
        </div>
        <div class="tile is-parent">
          <article class="tile is-child notification is-info ">
            <p class="title">HTML/CSS/JS... /*</p>
            <p class="subtitle">Load this application</p>
            <figure class="image is-4by3">
           <a href="/">

             <img alt="app logo" src="/android-chrome-512x512.png" />
           </a>  
            </figure>
          </article>
        </div>
      </div>
    </div>
  </div>
</div>
