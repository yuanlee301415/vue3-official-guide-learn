<template>
  <details open>
    <summary>NameLayout</summary>
    <div class="container">
      <header>
        <a href="">
          <slot name="header">Header</slot>
        </a>
      </header>
      <main>
        <h6>
          <slot>Main</slot>
        </h6>
      </main>

      <footer>
        <sub>
          <slot name="footer">Footer</slot>
        </sub>
      </footer>
    </div>
  </details>
</template>

<script lang="ts" setup></script>
