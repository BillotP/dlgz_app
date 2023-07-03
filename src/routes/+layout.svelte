<script lang="ts">
  import { onMount } from "svelte";
  import { base } from '$app/paths';
  import "../app.css";
  onMount(() => {
    // Get all "navbar-burger" elements
    const navbarBurgers = Array.prototype.slice.call(
      document.querySelectorAll(".navbar-burger"),
      0
    );

    // Add a click event on each of them
    navbarBurgers.forEach((el) => {
      el.addEventListener("click", () => {
        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const targetEl = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle("is-active");
        targetEl?.classList.toggle("is-active");
      });
    });
  });
</script>

<svelte:head>
  <title>Delegationz</title>
</svelte:head>

<nav class="navbar is-fixed-top is-primary">
  <div class="navbar-brand">
    <a href="{base}/" class="navbar-item">
      <span class="icon">
        <i style="font-weight: 900;">🥖</i>
      </span>
    </a>
    <span
      role="button"
      class="navbar-burger"
      aria-label="menu"
      aria-expanded="false"
      data-target="navbarBasicExample"
    >
      <span aria-hidden="true" />
      <span aria-hidden="true" />
      <span aria-hidden="true" />
    </span>
  </div>
  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item" href="{base}/"> Home </a>

      <a class="navbar-item" href="{base}/doc"> Documentation </a>

      <div class="navbar-item has-dropdown is-hoverable">
        <span class="navbar-link"> More </span>

        <div class="navbar-dropdown">
          <a
            class="navbar-item"
            target="_blank"
            href="https://github.com/BillotP"
          >
            Contact
          </a>
          <hr class="navbar-divider" />
          <a
            class="navbar-item"
            target="_blank"
            href="https://github.com/BillotP/delegationz/issues"
          >
            Report an issue
          </a>
        </div>
      </div>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="field is-grouped">
          <p class="control">
            <a
              class="button is-secondary"
              target="_blank"
              href="https://github.com/BillotP/dlgz_app"
            >
              <span class="icon">
                <i class="fab fa-github" />
              </span>
              <span>Repo</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</nav>
<slot />
