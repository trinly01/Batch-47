<template>
  <q-toolbar class="bg-purple text-white">
    <q-btn flat round dense icon="assignment_ind" />
    <q-toolbar-title>
      Pokedex
    </q-toolbar-title>
    <!-- <q-btn flat round dense icon="apps" class="q-mr-xs" /> -->
    <!-- <q-btn flat round dense icon="more_vert" /> -->
    <q-input placeholder="Search" dark dense standout v-model="textSearch" input-class="text-right" class="q-ml-md" />
    <!-- <input type="text" v-model="textSearch" /> -->
  </q-toolbar>

  <div>
    <q-card class="my-card">
      <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
        <div class="absolute-bottom">
          <div class="text-h6">Our Changing Planet</div>
          <div class="text-subtitle2">by John Doe</div>
        </div>
      </q-img>

      <q-card-actions>
        <q-btn flat>Action 1</q-btn>
        <q-btn flat>Action 2</q-btn>
      </q-card-actions>
    </q-card>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const textSearch = ref('Hello Batch 47')
</script>

<style scoped>
.my-card {
  width: 100%;
  max-width: 250px;
}
</style>
