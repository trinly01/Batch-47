<script setup>
import { ref } from 'vue'
const greeting = ref('Hello World!')
</script>

<template>
  <h1 class="greeting">{{ greeting }}</h1>
</template>

<style>
.greeting {
  color: red;
  font-weight: bold;
}
</style>
