<template>
  <header class="main-header"></header>
  <div class="main-content md:container md:mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <PersonalInformation />
    <Divider />
  </div>
  <footer class="main-footer"></footer>
</template>

<script setup lang="ts">
import Divider from 'primevue/divider'

import { PersonalInformation } from '.'
</script>

<style scoped>
:deep() .section-label > a {
  color: var(--primary-color);
  display: none;
  margin-left: 1rem;
  opacity: 0.7;
  transition: all 0.2s;
  text-decoration: none;
}

:deep() .section-label:hover > a {
  display: inline-flex;
}
</style>
