<template>
  <q-toolbar class="bg-purple text-white">
    <q-btn flat round dense icon="assignment_ind" />
    <q-toolbar-title>
      Pokedex
    </q-toolbar-title>
    <!-- <q-btn flat round dense icon="apps" class="q-mr-xs" /> -->
    <!-- <q-btn flat round dense icon="more_vert" /> -->
    <q-input dark dense standout v-model="textSearch" input-class="text-right" class="q-ml-md">
      <template v-slot:append>
        <q-icon v-if="text === ''" name="search" />
        <q-icon v-else name="clear" class="cursor-pointer" @click="text = ''" />
      </template>
    </q-input>
  </q-toolbar>
  {{ textSearch }}
</template>

<script setup>
import { ref } from 'vue'
const textSearch = ref('Hello Batch 47')
</script>

<style>
.greeting {
  color: red;
  font-weight: bold;
}
</style>
