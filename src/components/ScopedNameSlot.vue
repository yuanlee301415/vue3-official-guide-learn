<template>
  <details open>
    <summary>ScopedNameSlot</summary>
    <div class="container">
      <header>
        <slot name="header" title="Title is ...">Header</slot>
      </header>

      <main>
        <slot content="Content is ...">Main</slot>
      </main>

      <footer>
        <slot name="footer">Footer</slot>
      </footer>
    </div>
  </details>
</template>

<script lang="ts" setup></script>
